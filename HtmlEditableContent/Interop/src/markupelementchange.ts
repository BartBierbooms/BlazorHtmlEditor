import { MarkUpRange } from "./markuprange";

export class MarkUpValueChange {
    Init(id: string, changed: string, html: string, changeRange: MarkUpRange): void {
        this.id = id;
        this.changed = changed;
        this.changedHtml = html;
        this.changeRange = changeRange;
    }
    changeRange: MarkUpRange;
    id: string;
    changed: string;
    changedHtml: string
}
