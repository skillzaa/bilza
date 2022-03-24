import { FontNames } from "../../index.js";
export class ObjectData {
    constructor() {
        this.frameStart = 0;
        this.x = 50;
        this.y = 50;
        this.content = "text!";
        this.widthMargin = 0;
        this.widthBorder = 0;
        this.widthPadding = 0;
        this.colorMargin = "red";
        this.colorBorder = "green";
        this.colorPadding = "blue";
        this.colorContentBg = "yellow";
        this.fontColor = "black";
        this.fontSize = 32;
        this.fontFamily = FontNames.Courier;
        this.flagDrawMargin = false;
        this.flagDrawBorder = false;
        this.flagDrawPadding = false;
        this.flagDrawContentArea = false;
        this.flagDrawBoundingRectangle = false;
        this.flagDrawText = true;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
export class CalcData {
    constructor() {
        this.marginX = 0;
        this.marginY = 0;
        this.borderX = 0;
        this.borderY = 0;
        this.paddingX = 0;
        this.paddingY = 0;
        this.contentAreaX = 0;
        this.contentAreaY = 0;
        this.contentWidth = 0;
        this.contentHeight = 0;
    }
}
;
