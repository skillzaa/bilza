import { FontNames } from "../index.js";
import Text from "../components/text/text.js";
export default class AddTextTemplates {
    constructor(comps) {
        this.addToArray = comps;
    }
    demo(content = "", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "yellow", fontSize = 40) {
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
        return g;
    }
    txt(content = "", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "black", fontSize = 40) {
        let g = new Text(content, fontColor, fontSize, msStart, msEnd);
        this.addToArray.push(g);
        g.d.flagDrawBorder = false;
        g.d.flagDrawContentArea = false;
        g.d.flagDrawMargin = false;
        g.d.flagDrawPadding = false;
        g.d.flagDrawText = true;
        g.d.fontFamily = FontNames.Helvetica;
        return g;
    }
    txtBg(content = "", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "yellow", bgColor = "#051854") {
        let g = new Text(content, fontColor, 50, msStart, msEnd);
        g.d.colorContentBg = bgColor;
        this.addToArray.push(g);
        g.d.flagDrawBorder = false;
        g.d.flagDrawContentArea = true;
        g.d.flagDrawMargin = false;
        g.d.flagDrawPadding = true;
        g.d.flagDrawText = true;
        g.d.fontFamily = FontNames.Helvetica;
        return g;
    }
}
