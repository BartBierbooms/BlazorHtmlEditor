export class MarkUpElementRange {

    constructor() { }

    private nodewalk(node: Node, func: (node: Node) => boolean): boolean {
        let result = func(node);
        for (node = node.firstChild; result !== false && node; node = node.nextSibling)
            result = this.nodewalk(node, func);
        return result;
    }

    public createCursorRange(elem: HTMLElement, nrOfChars: number): [Range, Node]
    {
        let result: [Node, number] = [elem, 0];
        this.nodewalk(elem, (node: Node) => {
            if (nrOfChars === 0) {
                result = [node, 0]
                return false;
            }
            if (node.textContent && !node.firstChild && node.nodeType !== node.COMMENT_NODE && node.nodeType === node.TEXT_NODE) {
                if (node.textContent.length < nrOfChars) {
                    nrOfChars -= node.textContent.length;
                }
                else {
                    result = [node, nrOfChars]
                    return false;
                }

            };
            result = [node, nrOfChars]
        });
        const range = document.createRange()
        range.setStart(result[0], result[1]);
        return [range, result[0]];
    }

    public createRange(elem: HTMLElement, start: number, end: number): Range {

        const nodesToFind: Array<Node> = [null, null];
        const selPoints: Array<number> = [0, 0];
        let nrOfChars = start;
        let nrOfCharsEnd = end;
        this.nodewalk(elem, (node: Node) => {
            if (nodesToFind.every(v => v)) {
                return false;
            }
            if (start <= 0) {
                nodesToFind[0] = node;
                selPoints[0] = 0;
            }
            else if (node.textContent && !node.firstChild && node.nodeType !== node.COMMENT_NODE && node.nodeType === node.TEXT_NODE) {
                const nodeLength = node.textContent.length;
                const nrToCompare = (nodesToFind[0] === null) ? nrOfChars : nrOfCharsEnd;
                if (nrToCompare > nodeLength) {
                    nrOfChars -= nodeLength;
                    nrOfCharsEnd -= nodeLength
                }
                else {
                    if (nodesToFind[0] !== null ) {
                        nodesToFind[1] = node;
                        selPoints[1] = nrOfCharsEnd;
                    }
                    else {
                        nodesToFind[0] = node;
                        selPoints[0] = nrOfChars;
                        if (nrOfCharsEnd <= nodeLength) {
                            nodesToFind[1] = node;
                            selPoints[1] = nrOfCharsEnd;
                        } else{
                            nrOfCharsEnd -= nodeLength;
                        }
                    }
                }
            };
        });
        if (!nodesToFind[0]) {
            nodesToFind[0] = elem;
        }
        if (!nodesToFind[1]) {
            nodesToFind[1] = nodesToFind[0];
        }
        const range = document.createRange()
        range.setStart(nodesToFind[0], selPoints[0]);
        range.setEnd(nodesToFind[1], selPoints[1]);
        return range;


    }


    // getCaretPosition: return [start, end] as offsets to elem.textContent that
    //   correspond to the selected portion of text
    //   (if start === end, caret is at given position and no text is selected)
    public getCaretPosition(elem: HTMLElement): number[] {
        const sel: Selection = window.getSelection();
        let cumLength = [0, 0];

        if (sel.anchorNode === elem) {
            cumLength = [sel.anchorOffset, sel.focusOffset];
        }
        else {
            const nodesToFind = [sel.anchorNode, sel.focusNode];
            if (!elem.contains(sel.anchorNode) || !elem.contains(sel.focusNode))
                return undefined;
            else {
                const found: Array<boolean> = [false, false];
                let i;
                this.nodewalk(elem, (node: Node) => {
                    for (i = 0; i < 2; i++) {
                        if (node === nodesToFind[i]) {
                            found[i] = true;
                            if (found[i === 0 ? 1 : 0])
                                return false; // all done
                        }
                    }

                    if (node.textContent && !node.firstChild && node.nodeType !== node.COMMENT_NODE) {
                        for (i = 0; i < 2; i++) {
                            if (!found[i]) {
                                cumLength[i] += node.textContent.length;
                            }
                        }
                    }
                });
                cumLength[0] += sel.anchorOffset;
                cumLength[1] += sel.focusOffset;
            }
        }
        if (cumLength[0] <= cumLength[1])
            return cumLength;

        return [cumLength[1], cumLength[0]];
    }

}
