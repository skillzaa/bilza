import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";
export default class TextTemplates {
    constructor(comps = []) {
        this.addToArray = comps;
    }
    hdg(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 10, y = 10) {
        let txt = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y);
        this.addToArray.push(txt);
        txt.d.flagDrawBg = true;
        txt.d.colorBg = lightenDarkenColor("#0ab513", 175);
        txt.d.border = 20;
        txt.d.flagDrawBorder = true;
        txt.d.colorBorder = lightenDarkenColor("#0ab513", 20);
        txt.d.fontSize = 75;
        return txt;
    }
}
