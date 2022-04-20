import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";
export default class TextTemplates {
    constructor(comps = []) {
        this.addToArray = comps;
    }
    hdg(content = "HDG", bgHax = "#008000", fontColor = null, x = 50, y = 5, widthPercent = 10, heightPercent = 10) {
        let txt = new Text(content, bgHax, x, y, widthPercent, heightPercent);
        this.addToArray.push(txt);
        txt.d.padding = 5;
        txt.d.margin = 5;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.colorBg = lightenDarkenColor(bgHax, 200);
        txt.d.flagDrawBorder = true;
        txt.d.flagDrawBg = true;
        if (fontColor !== null) {
            txt.d.color = fontColor;
        }
        return txt;
    }
    li(content = "li", bgHax = "#008000", fontColor = null, x = 50, y = 30) {
        let txt = new Text(content, bgHax, x, y, 60, 10);
        this.addToArray.push(txt);
        txt.d.padding = 2;
        txt.d.margin = 2;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Top;
        txt.d.colorBg = lightenDarkenColor(bgHax, 200);
        txt.d.flagDrawBorder = true;
        txt.d.flagDrawBg = true;
        if (fontColor !== null) {
            txt.d.color = fontColor;
        }
        return txt;
    }
    h1(content = "The Main Title", bgHax = "#008000", fontColor = null) {
        let txt = new Text(content, bgHax, 50, 1, 90, 20);
        this.addToArray.push(txt);
        txt.d.padding = 5;
        txt.d.margin = 5;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.colorBg = lightenDarkenColor(bgHax, 200);
        txt.d.flagDrawBorder = true;
        txt.d.flagDrawBg = true;
        if (fontColor !== null) {
            txt.d.color = fontColor;
        }
        return txt;
    }
}
