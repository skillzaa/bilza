import { FontNames } from "../../Bilza.js";
export class ObjectData {
    constructor() {
        this.msStart = 0;
        this.x = 50;
        this.y = 50;
        this.content = "text!";
        this.widthMargin = 0;
        this.widthBorder = 0;
        this.widthPadding = 0;
        this.boundingRectXYExtra = [50, 50];
        this.colorBoundingRect = "black";
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
        this.flagTextShadow = false;
        this.flagBoundingRectShadow = false;
        this.textShadowColor = "grey";
        this.textShadowOffsetX = 10;
        this.textShadowOffsetY = 10;
        this.textShadowBlur = 5;
        this.boundingRectShadowColor = "grey";
        this.boundingRectShadowOffsetX = 15;
        this.boundingRectShadowOffsetY = 15;
        this.boundingRectShadowBlur = 5;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
