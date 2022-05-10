import CompDataBase from "../../BaseComponent/CompDataBase.js";
import { XAlignment } from "../../BaseComponent/xAlignment.js";
import { YAlignment } from "../../BaseComponent/yAlignment.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.flagUseRelativeXY = true;
        this.dynWidth = 25;
        this.dynHeight = 30;
        this.flagUseDynResize = true;
        this.flagShrinkHeightToFit = true;
        this.xAlignment = XAlignment.Left;
        this.yAlignment = YAlignment.Top;
        this.content = "Text Component";
        this.padding = 0;
        this.border = 0;
        this.colorBorder = "black";
        this.colorBg = "#e1f4e1";
        this.color = "black";
        this.fontSize = 25;
        this.showContent = true;
        this.showBg = false;
        this.showTextShadow = false;
        this.showBgShadow = false;
        this.showBorderShadow = false;
        this.maxDisplayChars = 200;
        this.selected = false;
        this.visible = true;
        this.shadowColor = "#b2abab";
        this.shadowOffsetX = 13;
        this.shadowOffsetY = 9;
        this.shadowBlur = 4;
        this.colorBoundingRectangle = "#000000";
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
