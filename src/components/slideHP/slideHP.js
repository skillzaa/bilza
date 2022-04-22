import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import TextTemplates from "../../compFactory/textTemplates.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import Text from "../text/text.js";
import Para from "../para/para.js";
let tt = new TextTemplates();
export default class SlideHP extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "The Title", color = "#00ff37") {
        super(DataFn);
        this.hdg = this.getHdg(startTimeSeconds, endTimeSeconds, content, color);
        this.para = new Para(startTimeSeconds, endTimeSeconds);
        this.setPara();
        this.drawLayer = DrawLayer.MiddleGround;
        this.setStartTime(startTimeSeconds * 1000);
        this.setEndTime(endTimeSeconds * 1000);
    }
    setPara() {
        this.para.d.y = 50;
        this.para.d.x = 5;
        this.para.d.border = 1;
        this.para.d.colorBorder = "blue";
        this.para.shadowsOn();
    }
    getHdg(startTimeSeconds, endTimeSeconds, content, color) {
        let txt = new Text(this.getStartTime(), this.getEndTime(), content, color);
        txt.d.x = 50;
        txt.d.y = 25;
        txt.d.border = 4;
        txt.d.margin = 0;
        txt.d.widthPercent = 80;
        txt.d.heightPercent = 15;
        txt.d.xAlignment = txt.xAlignmentOptions.Mid;
        txt.d.yAlignment = txt.yAlignmentOptions.Mid;
        txt.d.autoScaleFontSize = true;
        txt.d.flagDrawBg = true;
        txt.d.flagDrawBorder = true;
        txt.d.flagBgShadow = true;
        txt.d.colorBg = lightenDarkenColor(color, 60);
        txt.d.flagBgShadow = true;
        return txt;
    }
    addLine(content) {
        this.para.addLine(content);
    }
    draw(p) {
        this.hdg.setFontSize(p);
        this.hdg.draw(p);
        this.para.draw(p);
        return true;
    }
}
