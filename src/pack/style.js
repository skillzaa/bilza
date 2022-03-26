import { LineCapStyle } from "../design/lineCapStyle.js";
import { FontNames } from "../design/fontNames.js";
export default class Style {
    constructor(frameStart = 0) {
        this.frameStart = frameStart;
        this.fontSize = 25;
        this.fontName = FontNames.Luminari;
        this.fillStyle = "green";
        this.strokeStyle = "red";
        this.lineWidth = 2;
        this.shadowColor = "black";
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
        this.globalAlpha = 1;
        this.lineCap = LineCapStyle.Round;
        this.lineDash = [];
    }
    merge(incom) {
        if (incom.lineCap !== null) {
            this.lineCap = incom.lineCap;
        }
        if (incom.globalAlpha !== null) {
            this.globalAlpha = incom.globalAlpha;
        }
        if (incom.shadowBlur !== null) {
            this.shadowBlur = incom.shadowBlur;
        }
        if (incom.shadowOffsetY !== null) {
            this.shadowOffsetY = incom.shadowOffsetY;
        }
        if (incom.shadowOffsetX !== null) {
            this.shadowOffsetX = incom.shadowOffsetX;
        }
        if (incom.lineWidth !== null) {
            this.lineWidth = incom.lineWidth;
        }
        if (incom.shadowColor !== null) {
            this.shadowColor = incom.shadowColor;
        }
        if (incom.strokeStyle !== null) {
            this.strokeStyle = incom.strokeStyle;
        }
        if (incom.fillStyle !== null) {
            this.fillStyle = incom.fillStyle;
        }
        if (incom.fontSize !== null) {
            this.fontSize = incom.fontSize;
        }
        if (incom.fontName !== null) {
            this.fontName = incom.fontName;
        }
        if (incom.lineDash !== null) {
            this.lineDash = incom.lineDash;
        }
    }
}
