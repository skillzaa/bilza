import CompDataBase from "../../design/CompDataBase.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "./yAlignment.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.xAlignment = XAlignment.Left;
        this.yAlignment = YAlignment.Top;
        this.content = "Text";
        this.padding = 2;
        this.margin = 2;
        this.border = 2;
        this.colorBorder = "black";
        this.colorBg = "#e1f4e1";
        this.color = "black";
        this.widthPercent = 10;
        this.heightPercent = 10;
        this.fontSize = 25;
        this.flagDrawContent = true;
        this.flagDrawBorder = false;
        this.dynamicFontSize = true;
        this.flagDrawBg = false;
        this.maxDisplayChars = 200;
        this.flagTextShadow = false;
        this.flagBgShadow = false;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
