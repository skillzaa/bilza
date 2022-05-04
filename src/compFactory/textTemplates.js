import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";
import Fn from "../functions/fn.js";
export default class TextTemplates {
    constructor(insert) {
        this.insert = insert;
        this.util = new Fn();
    }
    h1(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "008000", x = 50, y = 3, dynWidth = 80, dynHeight = 30) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y);
        this.insert(txt);
        txt.d.border = 2;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Top;
        txt.d.flagDrawBorder = true;
        txt.d.flagDrawBg = true;
        txt.d.dynWidth = dynWidth;
        txt.d.dynHeight = dynHeight;
        txt.d.flagUseDynResize = true;
        txt.d.flagShrinkHeightToFit = true;
        return txt;
    }
    hdg(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 10, y = 10) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y);
        this.insert(txt);
        txt.d.flagDrawBg = true;
        txt.d.colorBg = lightenDarkenColor("#0ab513", 175);
        txt.d.border = 20;
        txt.d.flagDrawBorder = true;
        txt.d.colorBorder = lightenDarkenColor("#0ab513", 20);
        txt.d.fontSize = 75;
        return txt;
    }
    test(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 10, y = 10) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y);
        this.insert(txt);
        txt.d.x = 50,
            txt.d.y = 50,
            txt.d.selected = false,
            txt.d.visible = true,
            txt.d.shadowColor = "grey",
            txt.d.shadowOffsetX = 10,
            txt.d.shadowOffsetY = 10,
            txt.d.shadowBlur = 8,
            txt.d.colorBoundingRectangle = "black",
            txt.d.xAlignment = txt.xAlignmentOptions.Mid,
            txt.d.yAlignment = txt.yAlignmentOptions.Mid,
            txt.d.content = "Text Sample",
            txt.d.padding = 10,
            txt.d.border = 16,
            txt.d.dynWidth = 80,
            txt.d.dynHeight = 100,
            txt.d.colorBorder = "#f20707",
            txt.d.colorBg = "a0a0a",
            txt.d.color = "red",
            txt.d.fontSize = 75,
            txt.d.flagDrawContent = true,
            txt.d.flagDrawBorder = true,
            txt.d.flagDrawBg = false,
            txt.d.flagTextShadow = false,
            txt.d.flagBgShadow = false,
            txt.d.flagBorderShadow = false,
            txt.d.maxDisplayChars = 200,
            txt.d.flagUseDynResize = true,
            txt.d.flagShrinkHeightToFit = true,
            txt.d.flagUseRelativeXY = true;
        return txt;
    }
    title(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 10, y = 10) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y);
        this.insert(txt);
        txt.d.x = 50,
            txt.d.y = 2,
            txt.d.selected = false,
            txt.d.visible = true,
            txt.d.shadowColor = "grey",
            txt.d.shadowOffsetX = 10,
            txt.d.shadowOffsetY = 10,
            txt.d.shadowBlur = 8,
            txt.d.colorBoundingRectangle = "black",
            txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Top,
            txt.d.content = "Heading One",
            txt.d.padding = 2,
            txt.d.border = 2,
            txt.d.dynWidth = 100,
            txt.d.dynHeight = 33,
            txt.d.colorBorder = "red",
            txt.d.colorBg = "#ede8e8",
            txt.d.color = "red",
            txt.d.fontSize = 95,
            txt.d.flagDrawContent = true,
            txt.d.flagDrawBorder = true,
            txt.d.flagDrawBg = true,
            txt.d.flagTextShadow = false,
            txt.d.flagBgShadow = true,
            txt.d.flagBorderShadow = false,
            txt.d.maxDisplayChars = 200,
            txt.d.flagUseDynResize = true,
            txt.d.flagShrinkHeightToFit = true,
            txt.d.flagUseRelativeXY = true;
        return txt;
    }
    jt(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", colorHax = "#008000") {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, colorHax, 50, 50);
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Mid;
        this.insert(txt);
        txt.d.flagDrawBg = true;
        txt.d.colorBg = lightenDarkenColor("#0ab513", 175);
        txt.d.border = 2;
        txt.d.flagDrawBorder = true;
        txt.d.colorBorder = lightenDarkenColor("#0ab513", 20);
        return txt;
    }
}
