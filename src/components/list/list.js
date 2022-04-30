import { Component } from "../../Bilza.js";
import Text from "../text/text.js";
import DataFn from "./DataFn.js";
import ListUtil from "./listUtil.js";
export default class List extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 10, y = 10, dynWidth = 80) {
        super(DataFn, msStart, msEnd);
        this.pvtFontSize = 20;
        this.d.x = x;
        this.d.y = y;
        this.d.dynWidth = dynWidth;
        this.util = new ListUtil(this.d);
    }
    width(p) {
        let wd = 0;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            if (item.width(p) > wd) {
                wd = item.width(p);
            }
        }
        return wd + (this.d.paddingX * 4);
    }
    height(p, perc = 0) {
        let ht = this.d.paddingY;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            ht += item.height(p);
            ht += this.d.gap;
        }
        return ht + (this.d.paddingY);
    }
    init(p) {
        this.util.initAllItems(p);
        this.pvtFontSize = this.util.getSmallestFontSize(p);
        this.util.assignFontSizeToAll(this.pvtFontSize);
        let fitsVertically = this.initXY(p);
        if (fitsVertically == false && this.d.flagShrinkTofitVertically == true) {
            this.shrinkToFitVertically(p);
        }
        for (let i = 0; i < this.d.items.length; i++) {
            this.d.items[i].d.color = this.d.colorFont;
        }
        for (let i = 0; i < this.d.items.length; i++) {
            this.d.items[i].d.colorBorder = this.d.colorItemBorder;
        }
        return true;
    }
    update(msDelta, p) {
        this.util.applyDim(p);
        this.util.applyHighlight(p);
        return true;
    }
    initXY(p) {
        let y = p.yPerc(this.d.y);
        let fitsVertically = true;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            item.d.x = this.getItemX(p);
            item.d.y = y + this.d.paddingY;
            y += item.height(p);
            y += this.d.gap;
            if (y > p.canvasHeight()) {
                fitsVertically = false;
            }
        }
        return fitsVertically;
    }
    getItemX(p) {
        let x = p.xPerc(this.d.x);
        switch (this.d.align) {
            case "left":
                break;
            case "right":
                x += this.width(p) - (this.d.paddingX + this.d.paddingX + this.d.widthBorder);
                for (let i = 0; i < this.d.items.length; i++) {
                    const item = this.d.items[i];
                    item.d.xAlignment = item.xAlignmentOptions.Right;
                }
                break;
            case "centre":
                x += this.width(p) / 2;
                for (let i = 0; i < this.d.items.length; i++) {
                    const item = this.d.items[i];
                    item.d.xAlignment = item.xAlignmentOptions.Mid;
                }
                break;
            default:
                break;
        }
        return x + this.d.paddingX;
    }
    shrinkToFitVertically(p) {
        let oldPvtFontSize = this.pvtFontSize;
        for (let i = 0; i < 300; i++) {
            this.pvtFontSize -= 1;
            this.util.assignFontSizeToAll(this.pvtFontSize);
            let res = this.initXY(p);
            if (res == true) {
                return true;
            }
        }
        return false;
    }
    draw(p) {
        this.drawBorder(p);
        this.drawBg(p);
        for (let i = 0; i < this.d.items.length; i++) {
            this.d.items[i].draw(p);
        }
        return true;
    }
    drawBorder(p) {
        this.style.fillStyle = this.d.colorBorder;
        this.style.strokeStyle = this.d.colorBorder;
        p.drawFillRect(p.xPerc(this.d.x) - this.d.widthBorder, p.yPerc(this.d.y) - this.d.widthBorder, this.width(p) + (this.d.widthBorder * 2), this.height(p) + (this.d.widthBorder * 2), this.style);
    }
    drawBg(p) {
        this.style.fillStyle = this.d.colorBg;
        this.style.strokeStyle = this.d.colorBg;
        p.drawFillRect(p.xPerc(this.d.x), p.yPerc(this.d.y), this.width(p), this.height(p), this.style);
    }
    addItem(content = "") {
        let item = new Text(this.getStartTime(), this.getEndTime(), content);
        item.d.flagDrawBorder = true;
        item.d.flagUseRelativeXY = false;
        item.d.flagUseDynResize = true;
        item.d.dynWidth = this.d.dynWidth;
        this.d.items.push(item);
    }
}
