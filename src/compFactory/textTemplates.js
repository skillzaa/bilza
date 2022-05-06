import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";
import Fn from "../functions/fn.js";
export default class TextTemplates {
    constructor(insert) {
        this.insert = insert;
        this.util = new Fn();
    }
    h1(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", colorHax = "#000000") {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, colorHax, 50, 5);
        this.insert(txt);
        txt.d.selected = false;
        txt.d.visible = true;
        txt.d.shadowColor = "#b2abab";
        txt.d.shadowOffsetX = 13;
        txt.d.shadowOffsetY = 9;
        txt.d.shadowBlur = 4;
        txt.d.colorBoundingRectangle = "#000000";
        txt.d.flagUseRelativeXY = true;
        txt.d.dynWidth = 80;
        txt.d.dynHeight = 25;
        txt.d.flagUseDynResize = true;
        txt.d.flagShrinkHeightToFit = true;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Top;
        txt.d.content = content;
        txt.d.padding = 8;
        txt.d.border = 4;
        txt.d.colorBorder = colorHax;
        txt.d.colorBg = lightenDarkenColor(colorHax, 245);
        txt.d.color = colorHax;
        txt.d.fontSize = 26;
        txt.d.showContent = true;
        txt.d.showBg = true;
        txt.d.showTextShadow = false;
        txt.d.showBgShadow = false;
        txt.d.showBorderShadow = false;
        txt.d.maxDisplayChars = 200;
        return txt;
    }
    jt(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "JUMBO TRON", colorHax = "#008000") {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        txt.d.x = 50;
        txt.d.y = 50;
        txt.d.selected = false;
        txt.d.visible = true;
        txt.d.shadowColor = "#b2abab";
        txt.d.shadowOffsetX = 13;
        txt.d.shadowOffsetY = 9;
        txt.d.shadowBlur = 4;
        txt.d.colorBoundingRectangle = "#000000";
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Mid;
        txt.d.content = content;
        txt.d.padding = 20;
        txt.d.border = 10;
        txt.d.dynWidth = 80;
        txt.d.dynHeight = 100;
        txt.d.colorBorder = colorHax;
        txt.d.colorBg = lightenDarkenColor(colorHax, 245);
        txt.d.color = colorHax;
        txt.d.fontSize = 45;
        txt.d.showContent = true;
        txt.d.showBg = true;
        txt.d.showTextShadow = true;
        txt.d.showBgShadow = true;
        txt.d.showBorderShadow = false;
        txt.d.maxDisplayChars = 200;
        txt.d.flagUseDynResize = true;
        txt.d.flagShrinkHeightToFit = true;
        txt.d.flagUseRelativeXY = true;
        return txt;
    }
    bulletPointMid(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "bulletPointMid", colorHax = "#008000", y = 50) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, colorHax, 50, y);
        this.insert(txt);
        txt.d.selected = false;
        txt.d.visible = true;
        txt.d.shadowColor = "#b2abab";
        txt.d.shadowOffsetX = 13;
        txt.d.shadowOffsetY = 9;
        txt.d.shadowBlur = 4;
        txt.d.colorBoundingRectangle = "#000000";
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Mid;
        txt.d.content = content;
        txt.d.padding = 20;
        txt.d.border = 0;
        txt.d.dynWidth = 80;
        txt.d.dynHeight = 30;
        txt.d.colorBorder = colorHax;
        txt.d.colorBg = lightenDarkenColor(colorHax, 245);
        txt.d.color = colorHax;
        txt.d.fontSize = 45;
        txt.d.showContent = true;
        txt.d.showBg = true;
        txt.d.showTextShadow = false;
        txt.d.showBgShadow = false;
        txt.d.showBorderShadow = false;
        txt.d.maxDisplayChars = 200;
        txt.d.flagUseDynResize = true;
        txt.d.flagShrinkHeightToFit = true;
        txt.d.flagUseRelativeXY = true;
        return txt;
    }
}
