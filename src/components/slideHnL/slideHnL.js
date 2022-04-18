import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import TextTemplates from "../../compFactory/textTemplates.js";
export default class SlideHnL extends Component {
    constructor(contentHdg = "The Title") {
        super(DataFn);
        this.tt = new TextTemplates();
        this.hdg = this.tt.h1(contentHdg);
        this.hdg.d.y = 5;
        this.lis = [];
        this.drawLayer = DrawLayer.MiddleGround;
    }
    addItem(content) {
        this.lis.push(this.tt.li(content, "#0000ff", null, 50));
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
        this.drawLis(p);
        return true;
    }
    drawLis(p) {
        let y = this.d.listStartY;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].d.y = y;
            this.lis[i].draw(p);
            let ht = this.lis[i].height(p);
            y += this.lis[i].d.heightPercent + this.d.listGapFactor;
        }
    }
}
