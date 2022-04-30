import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import Text from "../text/text.js";
import List from "../list/list.js";
export default class SlideHL extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "The Title", color = "#00ff37") {
        super(DataFn);
        this.hdg = new Text(startTimeSeconds, endTimeSeconds, content, color, 50, 1);
        this.hdg.d.padding = 5;
        this.hdg.d.margin = 5;
        this.hdg.d.xAlignment = this.hdg.xAlignmentOptions.Mid;
        this.hdg.d.yAlignment = this.hdg.yAlignmentOptions.Top;
        this.hdg.d.colorBg = lightenDarkenColor(color, 200);
        this.hdg.d.flagDrawBorder = true;
        this.hdg.d.flagDrawBg = true;
        this.hdg.d.flagUseDynResize = true;
        this.hdg.d.dynWidth = 80;
        this.list = new List(0, 6000, 8, 25, 80);
        this.list.d.colorBg = "#f4e55f";
        this.drawLayer = DrawLayer.MiddleGround;
        this.setStartTime(startTimeSeconds * 1000);
        this.setEndTime(endTimeSeconds * 1000);
    }
    init(p) {
        this.hdg.init(p);
        this.list.init(p);
        return true;
    }
    addItem(content, startDim = true, unDimSecond = 2) {
        this.list.addItem(content);
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    update(msDelta, p) {
        return true;
    }
    draw(p) {
        this.hdg.draw(p);
        this.list.draw(p);
        return true;
    }
}
