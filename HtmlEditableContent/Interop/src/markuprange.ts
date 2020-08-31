export class MarkUpRange {
    constructor(positionStart: number, positionEnd: number, anchorStart: number, focusStart: number, id: string) {      
        this.positionEnd = positionEnd;
        this.positionStart = positionStart;
        this.anchorStart = anchorStart;
        this.focusStart = focusStart;
        this.id = id;
    }
    public id: string
    public positionStart: number;
    public positionEnd: number;
    public anchorStart: number;
    public focusStart: number;

    public IsSelection(): boolean {
        return this.positionEnd !== this.positionStart
    }
    public GetPosition(elem: HTMLElement): number {
        if (elem) {
            const textArea = elem as HTMLTextAreaElement;
            if (textArea) {
                return textArea.selectionStart;
            }
            const input = elem as HTMLInputElement;
            if (input) {
                return input.selectionStart;
            }
            return -1;
        }
        else {
            return -1;
        }
    }
    public SetPosition(elem: HTMLElement, pos: number): void {
        if (elem) {
            const textArea = elem as HTMLTextAreaElement;
            if (textArea) {
                textArea.selectionStart = pos;
                textArea.selectionEnd = pos;
                return;
            }
            const input = elem as HTMLInputElement;
            if (input) {
                input.selectionStart = pos;
                input.selectionEnd = pos + 1;
            }
        }
    }
}

