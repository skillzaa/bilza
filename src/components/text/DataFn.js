import CompDataBase from "../../design/CompDataBase.js";
import { XAlignment } from "./xAlignment.js";
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
        this.colorDim = "#8e8d8d";
        this.colorDimBg = "#e8e5e5";
        this.colorDimBorder = "#8e8d8d";
        this.flagDim = false;
        this.widthPercent = 10;
        this.heightPercent = 10;
        this.flagDrawBorder = false;
        this.autoScaleFontSize = false;
        this.flagDrawBg = false;
        this.maxDisplayChars = 200;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
