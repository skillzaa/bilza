import Text from "../components/text/text.js";
export default class TextTemplates {
    constructor(comps = []) {
        this.addToArray = comps;
    }
    jt(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", colorBg = null, x = 50, y = 45, widthPercent = 80, heightPercent = 25) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y, widthPercent, heightPercent);
        this.addToArray.push(txt);
        txt.d.margin = 0;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Mid;
        txt.d.dynamicFontSize = true;
        txt.d.flagDrawBg = true;
        txt.d.flagDrawBorder = true;
        txt.d.flagBgShadow = true;
        txt.d.border = 4;
        if (colorBg !== null) {
            txt.d.colorBg = colorBg;
        }
        return txt;
    }
    h1(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", colorBg = null, x = 50, y = 2, widthPercent = 60, heightPercent = 10) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y, widthPercent, heightPercent);
        this.addToArray.push(txt);
        txt.d.margin = 0;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Top;
        txt.d.dynamicFontSize = true;
        txt.d.flagDrawBg = true;
        txt.d.flagDrawBorder = true;
        txt.d.flagBgShadow = true;
        txt.d.border = 2;
        txt.d.shadowBlur = 4;
        txt.d.shadowOffsetX = 6;
        txt.d.shadowOffsetY = 6;
        txt.d.colorShadow = "grey";
        if (colorBg !== null) {
            txt.d.colorBg = colorBg;
        }
        return txt;
    }
    li(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", colorBg = null, x = 50, y = 35, widthPercent = 75, heightPercent = 8) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y, widthPercent, heightPercent);
        this.addToArray.push(txt);
        txt.d.margin = 0;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Top;
        txt.d.dynamicFontSize = true;
        txt.d.flagDrawBg = false;
        txt.d.flagDrawBorder = false;
        txt.d.flagBgShadow = false;
        txt.d.border = 2;
        txt.d.shadowBlur = 4;
        txt.d.shadowOffsetX = 6;
        txt.d.shadowOffsetY = 6;
        txt.d.colorShadow = "grey";
        if (colorBg !== null) {
            txt.d.colorBg = colorBg;
        }
        return txt;
    }
}
