import { MarkUpRange } from "./markuprange";

export class MarkUpRangeElement extends MarkUpRange {

    constructor(positionStart: number, positionEnd: number, anchorStart: number, focusStart: number, id: string, tagName: string, textContent: string) {
        super(positionStart, positionEnd, anchorStart, focusStart, id);
        this.tagName = tagName;
        this.textContent = textContent;
    }
    public tagName: string
    public textContent: string
}