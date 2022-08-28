import { ThemeOpt } from "./themeOptions.js";
import { TemplOpt } from "./templateOptions.js";
import Text from "../components/text.js";

export default class TextBuilder {
    // protected readonly XAlignOpt :typeof ThemeOpt;
    // protected readonly TemplOpt :typeof ThemeOpt;
    
static build(content :string, templOpt :TemplOpt,themeOpt :ThemeOpt){
const txt = new Text(content);
applyTemplate(txt,templOpt);
applyTheme(txt,themeOpt);
return txt;
}


}

function applyTemplate(txt :Text,templOpt :TemplOpt){

    switch (templOpt) {
        case TemplOpt.Butt:
            
            break;
    
        default:
            break;
    }
}
function applyTheme(txt :Text,themeOpt :ThemeOpt){

}