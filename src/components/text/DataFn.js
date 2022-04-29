import CompDataBase from "../../design/CompDataBase.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.xAlignment = XAlignment.Left;
        this.yAlignment = YAlignment.Top;
        this.content = "Text";
        this.padding = 2;
        this.margin = 2;
        this.border = 2;
        this.dynWidth = 10;
        this.colorBorder = "black";
        this.colorBg = "#e1f4e1";
        this.color = "black";
        this.fontSize = 25;
        this.flagDrawContent = true;
        this.flagDrawBorder = false;
        this.flagDrawBg = false;
        this.maxDisplayChars = 200;
        this.flagTextShadow = false;
        this.flagBgShadow = false;
        this.flagUseDynResize = false;
        this.flagUseRelativeXY = true;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
