import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import TextTemplates from "../../compFactory/textTemplates.js";
let dimSeq;
export default class SlideHnL extends Component {
    constructor(contentHdg = "The Title") {
        super(DataFn);
        this.tt = new TextTemplates();
        this.hdg = this.tt.h1(contentHdg, "#ff0000");
        this.hdg.d.y = 5;
        this.lis = [];
        this.drawLayer = DrawLayer.MiddleGround;
        this.dimSeqArray = [];
    }
    dimSeq(itemIndex, TPlusSec) {
        this.dimSeqArray.push([itemIndex, TPlusSec]);
    }
    applyDimSeq(msDelta) {
        for (let i = 0; i < this.dimSeqArray.length; i++) {
            const element = this.dimSeqArray[i];
            if (element[1] >= (this.d.msStart + msDelta)) {
                this.lis[element[0]].d.flagDim = true;
            }
        }
    }
    addItem(content) {
        let item = this.tt.li(content, "#0000ff", null, 50);
        if (this.d.flagStartDim == true) {
            item.d.flagDim = true;
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
        this.applyDimSeq(msDelta);
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
