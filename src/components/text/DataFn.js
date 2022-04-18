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
        this.colorMargin = "black";
        this.colorBg = "#e1f4e1";
        this.color = "black";
        this.widthPercent = 10;
        this.heightPercent = 10;
        this.flagDrawMargin = false;
        this.flagDrawBg = false;
        this.flagDim = false;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
