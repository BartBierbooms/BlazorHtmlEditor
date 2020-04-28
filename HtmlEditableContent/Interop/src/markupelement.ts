import { MarkUpElementRange } from "./markupelementrange";
import { MarkUpRange } from "./markuprange";
import { MarkUpValueChange } from "./markupelementchange";
import { MarkUpValue } from "./markupvalue";

declare const DotNet: any;

export class MarkUpElement {

    private activeSelection: MarkUpRange;
    private elementRange: MarkUpElementRange;
    private observer: MutationObserver;
    private unkownPos: MarkUpRange = new MarkUpRange(-1, -1, "");

    constructor() {
        this.elementRange = new MarkUpElementRange
        this.activeSelection = new MarkUpRange(-1, -1, "");
    }

    private getElement(id: string): HTMLElement {
        return document.getElementById(id);
    }

    public GetPosition(id: string): MarkUpRange {
        const pos = this.elementRange.getCaretPosition(this.getElement(id));
        if (pos) {
            return new MarkUpRange(pos[0], pos[1], id);
        }
        return this.unkownPos;
    }

    public async SetContent(id: string, html: string, startPos: number, endPos: number) {
        const elem = document.getElementById(id);
        const editableElem = this.editableDivNode(elem);
        if (editableElem) {
            this.DetachMutationListener();
            if (this.observer) {
                this.observer.disconnect();
            }
            elem.innerHTML = html;
            elem.focus();
            const range = this.elementRange.createRange(editableElem, startPos, endPos);
            this.setSelection(range);
            this.AttachMutationListener(id);
        }
    }

    private async InsertNewLine(id: string)
    {
        const elem = document.getElementById(id);
        const editableElem = this.editableDivNode(elem);
        const tag = 'div';
        let inTheMiddle: boolean;
        if (editableElem) {

            const rangeNode = this.elementRange.createCursorRange(editableElem, this.activeSelection.positionStart);

            if (rangeNode) {
                const activeNode = rangeNode[1]
                inTheMiddle = true;
                if (rangeNode[0].startOffset === activeNode.textContent.length) {
                    inTheMiddle = false;
                }
                else if (rangeNode[0].startOffset === activeNode.textContent.length - 1 && activeNode.textContent.substring(activeNode.textContent.length - 1) === "\u200B") {
                    inTheMiddle = false;
                }
                const newTag = document.createElement(tag);
                newTag.innerHTML = "\u200B";
                if (!inTheMiddle) {
                    activeNode.parentElement.insertAdjacentElement('afterend', newTag);
                }
                else
                {
                    rangeNode[0].insertNode(newTag);
                }
                rangeNode[0].collapse(true);
                rangeNode[0].setStart(newTag, 1);
                rangeNode[0].setEnd(newTag, 1);
                this.setSelection(rangeNode[0]);
                elem.focus();
                await this.elemContentChanged(id, elem);
            }
        }
    }

    private editableDivNode(elem: HTMLElement): HTMLDivElement {
        if (elem) {
            if (elem.isContentEditable) {
                return elem as HTMLDivElement;
            }
            for (let i = 0; i < elem.childNodes.length; i++) {
                const node = elem.childNodes[i];
                const divNode = node as HTMLDivElement;
                if (divNode) {
                    if (divNode.isContentEditable) {
                        return divNode;
                    }
                }
            }
        }
    }

    public GetMarkUp(id: string): MarkUpValue {
        const markUpValue = new MarkUpValue();
        const elem = this.getElement(id);
        if (elem) {
            //console.log('GetMarkUp start/end: ' + this.activeSelection.positionStart + '/' + this.activeSelection.positionEnd);
            //console.log('elem.innerHTML' + elem.innerHTML);
            if (this.activeSelection.positionStart > - 1) {
                markUpValue.Init(id, elem.textContent, elem.innerHTML, this.activeSelection);
            }
            else {
                markUpValue.Init(id, elem.textContent, elem.innerHTML, this.unkownPos);
            }
        }
        return markUpValue;
    }

    public SetPosition(id: string, position: number): void {
        const elem = this.getElement(id);
        const editableElem = this.editableDivNode(elem);
        if (editableElem) {
            const range = this.elementRange.createRange(editableElem, position, position);
            if (range) {
                this.setSelection(range);
            }
        }
    }
    private setSelection(range: Range) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }

    private DetachMutationListener() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    public async AttachMutationListener(id: string) {
        const elem = this.getElement(id);
        if (elem) {
            if (this.observer) {
                this.observer.disconnect();
            }
            this.observer = new MutationObserver(async () => {
                    await this.elemContentChanged(id, elem);
                }
            );

            const config = {
                childList: true,
                attributes: true,
                characterData: true,
                subtree: true,
            };
            this.observer.observe(elem, config);
           
        }
    }
    public RemoveEventListener(id: string) {
        const elem = this.getElement(id);
        if (elem) {
            if (this.observer) {
                console.log("RemoveEventListener: this.observer.disconnect ");
                this.observer.disconnect();
            }
            elem.removeEventListener('keyup', () => { });
            elem.removeEventListener('keydown', () => { });
            elem.removeEventListener('mouseup', () => { });
        }
    }

    async elemContentChanged(id: string, elem: HTMLElement) {
        const posOnChange = this.elementRange.getCaretPosition(elem);
        if (posOnChange && posOnChange.length === 2) {
            const changed = new MarkUpValueChange();
            this.activeSelection = new MarkUpRange(posOnChange[0], posOnChange[1], id);
            changed.Init(id, elem.textContent, elem.innerHTML, this.activeSelection);
        }
    }
    async selectionChanged(elem: HTMLElement, id: string)
    {
        if (elem.textContent.length === 0)
            return;

        const posOnChange = this.elementRange.getCaretPosition(elem);
        if (posOnChange.length === 2) {
            this.activeSelection = new MarkUpRange(posOnChange[0], posOnChange[1], id);
            try {
                await DotNet.invokeMethodAsync('HtmlEditableContent', 'SelectionChanged', this.activeSelection);
            } catch (e) {
                console.log('there was an error');
                console.log(e);
            }
        }
    }

   
    public AddEventListener(id: string) {
        const elem = document.getElementById(id);
        if (elem) {

            elem.addEventListener('keyup', async () => {
                await this.selectionChanged(elem, id);
            });

            elem.addEventListener('keydown', (event) => {
                if (event.key === "Enter") {
                    event.cancelBubble = true;
                    event.preventDefault();
                    {
                        this.InsertNewLine(id);
                    }
                }
            });

            elem.addEventListener('mouseup', async () => {
                await this.selectionChanged(elem, id);
            });
        }
    }

}
