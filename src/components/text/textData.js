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
        this.border = 2;
        this.dynWidth = 80;
        this.dynHeight = 30;
        this.colorBorder = "black";
        this.colorBg = "#e1f4e1";
        this.color = "black";
        this.fontSize = 25;
        this.flagDrawContent = true;
        this.flagDrawBorder = false;
        this.flagDrawBg = false;
        this.flagTextShadow = false;
        this.flagBgShadow = false;
        this.flagBorderShadow = false;
        this.maxDisplayChars = 200;
        this.flagUseDynResize = false;
        this.flagShrinkHeightToFit = false;
        this.flagUseRelativeXY = true;
        this.x = 0;
        this.y = 0;
        this.selected = false;
        this.visible = true;
        this.shadowColor = "grey";
        this.shadowOffsetX = 10;
        this.shadowOffsetY = 10;
        this.shadowBlur = 8;
        this.colorBoundingRectangle = "black";
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
