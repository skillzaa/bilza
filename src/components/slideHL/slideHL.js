import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import Text from "../text/text.js";
import List from "../list/list.js";
export default class SlideHL extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "The Title", color = "#00ff37") {
        super(DataFn);
        this.hdg = new Text(startTimeSeconds, endTimeSeconds, content, color, 50, 1);
        this.hdg.d.flagDrawBg = true;
        this.hdg.d.colorBg = lightenDarkenColor("#0ab513", 175);
        this.hdg.d.border = 2;
        this.hdg.d.flagDrawBorder = true;
        this.hdg.d.colorBorder = lightenDarkenColor("#0ab513", 20);
        this.hdg.d.fontSize = 75;
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
