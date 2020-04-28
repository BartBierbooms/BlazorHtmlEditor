import { MarkUpRange } from "./markuprange";

export class MarkUpValue {
    Init(id: string, content: string, html: string, range: MarkUpRange): void {
        this.id = id;
        this.value = content;
        this.innerHtml = html;
        this.range = range;
    }
    innerHtml: string
    id: string;
    range: MarkUpRange;
    value: string;
}
