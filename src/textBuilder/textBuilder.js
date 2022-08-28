import { TemplOpt } from "./templateOptions.js";
import Text from "../components/text.js";
export default class TextBuilder {
    static build(content, templOpt, themeOpt) {
        const txt = new Text(content);
        applyTemplate(txt, templOpt);
        applyTheme(txt, themeOpt);
        return txt;
    }
}
function applyTemplate(txt, templOpt) {
    switch (templOpt) {
        case TemplOpt.Butt:
            break;
        default:
            break;
    }
}
function applyTheme(txt, themeOpt) {
}
