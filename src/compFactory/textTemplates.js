import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";
export default class TextTemplates {
    constructor(comps = []) {
        this.addToArray = comps;
    }
    hdg(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 0, y = 0, widthPercent = 10, heightPercent = 10) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y, widthPercent, heightPercent);
        this.addToArray.push(txt);
        txt.d.padding = 5;
        txt.d.margin = 5;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.colorBg = lightenDarkenColor(color, 200);
        txt.d.flagDrawBorder = true;
        txt.d.flagDrawBg = true;
        return txt;
    }
    li(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 0, y = 0, widthPercent = 10, heightPercent = 10) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y, widthPercent, heightPercent);
        this.addToArray.push(txt);
        txt.d.padding = 2;
        txt.d.margin = 2;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Top;
        txt.d.colorBg = lightenDarkenColor(color, 200);
        txt.d.flagDrawBorder = true;
        txt.d.flagDrawBg = true;
        return txt;
    }
    h1(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 0, y = 0, widthPercent = 10, heightPercent = 10) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y, widthPercent, heightPercent);
        txt.setStartTime(startTimeSeconds * 1000);
        txt.setEndTime(endTimeSeconds * 1000);
        this.addToArray.push(txt);
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Top;
        txt.d.padding = 5;
        txt.d.margin = 5;
        txt.d.color = color;
        txt.d.colorBorder = color;
        txt.d.colorBg = lightenDarkenColor(color, 1);
        txt.d.flagDrawBorder = true;
        txt.d.flagDrawBg = true;
        txt.shadowsOn();
        txt.d.autoScaleFontSize = true;
        return txt;
    }
    jt(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 0, y = 0, widthPercent = 10, heightPercent = 10) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y, widthPercent, heightPercent);
        this.addToArray.push(txt);
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Mid;
        txt.d.padding = 5;
        txt.d.margin = 5;
        txt.d.color = color;
        txt.d.colorBorder = color;
        txt.d.colorBg = lightenDarkenColor(color, 1);
        txt.d.flagDrawBorder = true;
        txt.d.flagDrawBg = true;
        txt.shadowsOn();
        txt.d.autoScaleFontSize = true;
        return txt;
    }
}
