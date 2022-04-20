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
        txt.d.autoScaleFontSize = true;
        txt.d.flagDrawBg = true;
        txt.d.flagDrawBorder = true;
        txt.d.flagBgShadow = true;
        txt.d.border = 4;
        if (colorBg !== null) {
            txt.d.colorBg = colorBg;
        }
        return txt;
    }
}
