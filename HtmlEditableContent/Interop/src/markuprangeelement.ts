import { MarkUpRange } from "./markuprange";

export class MarkUpRangeElement extends MarkUpRange {

    constructor(positionStart: number, positionEnd: number, id: string, tagName: string, textContent: string) {
        super(positionStart, positionEnd, id);
        this.tagName = tagName;
        this.textContent = textContent;
    }
    public tagName: string
    public textContent: string
}