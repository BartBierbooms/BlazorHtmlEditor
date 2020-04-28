import { MarkUpElement } from "./markupelement";
export class MarkUpTextArea {
    public static Load(): void {
        console.log('MarkUpTextArea function load');
        const Element = {
            MarkUpElement: new MarkUpElement()
        };

        if (window['blazorHtmlBuilder']) {
            window['blazorHtmlBuilder'] = {
                ...window['blazorHtmlBuilder'],
                ...Element
            }
        } else {
            window['blazorHtmlBuilder'] = {
                ...Element
            }
        }
    }
}