import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import Text from "../text/text.js";
import List from "../list/list.js";
export default class SlideHL extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "The Title", color = "#00ff37") {
        super(DataFn);
        this.setStartTime(startTimeSeconds * 1000);
        this.setEndTime(endTimeSeconds * 1000);
        this.hdg = this.getHdg();
        this.list = this.getList();
        this.drawLayer = DrawLayer.MiddleGround;
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
        this.hdg.update(msDelta, p);
        this.list.update(msDelta, p);
        return true;
    }
    draw(p) {
        this.hdg.draw(p);
        this.list.draw(p);
        return true;
    }
    getList() {
        let lis = new List(0, 6000, 8, 30, 80);
        lis.d.colorBg = "#e0e5e0";
        lis.d.colorBorder = "#008000";
        lis.d.colorItemBorder = "white";
        lis.d.colorFont = "#015901";
        return lis;
    }
    getHdg(content = "The Title", color = "#00ff37") {
        let hdg = new Text(this.getStartTime(), this.getEndTime(), content, color, 50, 1);
        hdg.d.border = 2;
        hdg.d.xAlignment = hdg.xAlignmentOptions.Mid;
        hdg.d.yAlignment = hdg.yAlignmentOptions.Top;
        hdg.d.flagDrawBorder = true;
        hdg.d.flagDrawBg = true;
        hdg.d.dynWidth = 80;
        hdg.d.color = "#008000";
        hdg.d.dynHeight = 25;
        hdg.d.flagUseDynResize = true;
        hdg.d.flagShrinkHeightToFit = true;
        return hdg;
    }
}
