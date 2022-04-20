import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import Text from "../text/text.js";
let dimSeq;
export default class SlideHnL extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, contentHdg = "The Title", color = "#00ff37") {
        super(DataFn);
        this.hdg = new Text(startTimeSeconds, endTimeSeconds, contentHdg, color);
        this.hdg.d.x = 50;
        this.hdg.d.y = 5;
        this.hdg.d.padding = 5;
        this.hdg.d.margin = 5;
        this.hdg.d.xAlignment = this.hdg.xAlignmentOptions.Mid;
        this.hdg.d.colorBg = lightenDarkenColor(color, 200);
        this.hdg.d.flagDrawBorder = true;
        this.hdg.d.flagDrawBg = true;
        this.lis = [];
        this.drawLayer = DrawLayer.MiddleGround;
        this.setStartTime(startTimeSeconds * 1000);
        this.setEndTime(endTimeSeconds * 1000);
    }
    addItem(content, startDim = true, unDimSecond = Number.MAX_SAFE_INTEGER) {
        let item = new Text(this.getStartTime(), this.getEndTime(), content, "#0000ff");
        if (startDim == true) {
            item.d.flagDim = true;
            let tr = item.addTransition((unDimSecond * 1000) + this.getStartTime());
            tr.flagDim = false;
        }
        this.lis.push(item);
        return item;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    update(msDelta, p) {
        for (let i = 0; i < this.lis.length; i++) {
            const element = this.lis[i];
            element.compData.apply(msDelta);
        }
        return true;
    }
    draw(p) {
        this.hdg.draw(p);
        this.drawLis(p);
        return true;
    }
    drawLis(p) {
        let y = this.d.listStartY;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].d.y = y;
            if (this.d.applyWdHtPerc == true) {
                this.lis[i].setFontSize(p);
            }
            this.lis[i].d.maxDisplayChars = this.d.maxLiChars;
            this.lis[i].draw(p);
            let ht = this.lis[i].height(p);
            y += this.lis[i].d.heightPercent + this.d.listGapFactor;
        }
    }
}
