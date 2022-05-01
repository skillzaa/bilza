import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import Text from "../text/text.js";
import List from "../list/list.js";
export default class SlideHL extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "The Title", color = "#00ff37") {
        super(DataFn);
        this.hdg = new Text(startTimeSeconds, endTimeSeconds, content, color, 50, 1);
        this.hdg.d.border = 2;
        this.hdg.d.xAlignment = this.hdg.xAlignmentOptions.Mid;
        this.hdg.d.yAlignment = this.hdg.yAlignmentOptions.Top;
        this.hdg.d.flagDrawBorder = true;
        this.hdg.d.flagDrawBg = true;
        this.hdg.d.dynWidth = 80;
        this.hdg.d.color = "#008000";
        this.hdg.d.dynHeight = 25;
        this.hdg.d.flagUseDynResize = true;
        this.hdg.d.flagShrinkHeightToFit = true;
        this.list = new List(0, 6000, 8, 30, 80);
        this.list.d.colorBg = "#e0e5e0";
        this.list.d.colorBorder = "#008000";
        this.list.d.colorItemBorder = "white";
        this.list.d.colorFont = "#015901";
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
