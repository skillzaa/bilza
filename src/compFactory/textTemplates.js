import { FontNames } from "../Bilza.js";
import Text from "../components/text/text.js";
export default class TextTemplates {
    constructor(comps) {
        this.addToArray = comps;
    }
    demo(content = "Bilza.js", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "yellow", fontSize = 40, x = 100, y = 100) {
        let g = new Text(content, fontColor, fontSize, msStart, msEnd);
        this.addToArray.push(g);
        g.d.flagDrawBorder = true;
        g.d.flagDrawContentArea = true;
        g.d.flagDrawMargin = true;
        g.d.flagDrawPadding = true;
        g.d.flagDrawText = true;
        g.d.colorMargin = "red";
        g.d.colorBorder = "green";
        g.d.colorPadding = "blue";
        g.d.colorContentBg = "black";
        g.d.widthBorder = 10;
        g.d.widthMargin = 10;
        g.d.widthPadding = 10;
        g.d.x = x;
        g.d.y = y;
        return g;
    }
    txt(content = "Bilza.js", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "black", fontSize = 40, x = 100, y = 100) {
        let g = new Text(content, fontColor, fontSize, msStart, msEnd);
        this.addToArray.push(g);
        g.d.flagDrawBorder = false;
        g.d.flagDrawContentArea = false;
        g.d.flagDrawMargin = false;
        g.d.flagDrawPadding = false;
        g.d.flagDrawText = true;
        g.d.fontFamily = FontNames.Helvetica;
        g.d.x = x;
        g.d.y = y;
        return g;
    }
    txtBg(content = "Bilza.js", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "yellow", fontSize = 50, bgColor = "#051854", x = 100, y = 100) {
        let g = new Text(content, fontColor, fontSize, msStart, msEnd);
        g.d.colorContentBg = bgColor;
        this.addToArray.push(g);
        g.d.flagDrawBorder = false;
        g.d.flagDrawContentArea = true;
        g.d.flagDrawMargin = false;
        g.d.flagDrawPadding = true;
        g.d.flagDrawText = true;
        g.d.fontFamily = FontNames.Helvetica;
        g.d.x = x;
        g.d.y = y;
        return g;
    }
    shadowRect(content = "Bilza.js", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "black", rectColor = "black", fontSize = 50, x = 100, y = 100) {
        let one = new Text(content, fontColor, fontSize, msStart, msEnd);
        this.addToArray.push(one);
        one.d.flagDrawBoundingRectangle = true;
        one.d.flagBoundingRectShadow = true;
        one.d.flagTextShadow = true;
        one.d.x = x;
        one.d.colorBoundingRect = rectColor;
        one.d.y = y;
        return one;
    }
}
