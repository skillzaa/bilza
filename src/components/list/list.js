import { Component } from "../../index.js";
import Text from "../text/text.js";
import DataFn from "./DataFn.js";
export default class List extends Component {
    constructor(x = 10, y = 10, fontSize = 30, msStart = 0, msEnd = 80000) {
        super(DataFn, msStart, msEnd);
        this.widthExtra = 10;
        this.d.x = x;
        this.d.y = y;
        this.d.fontSize = fontSize;
    }
    width(p) {
        let wd = 0;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            if (item.width(p) > wd) {
                wd = item.width(p);
            }
        }
        const wdPadding = wd + (this.d.paddingX * 4);
        return wdPadding + (wdPadding / 100 * this.widthExtra);
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
    update(ms, p) {
        let startX = this.d.x;
        let startY = this.d.y + this.d.paddingY;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            item.d.fontSize = this.d.fontSize;
            item.d.fontColor = this.d.fontColor;
            item.d.x = startX + this.setX(item, p);
            let itemY = startY + this.d.gap;
            item.d.y = itemY;
            startY = itemY;
            startY += item.height(p);
            item.update(ms, p);
        }
        this.updateFocus();
        this.updateHighlight();
        this.updateDim();
        this.compData.apply(ms);
        return true;
    }
    updateFocus() {
        for (let i = 0; i < this.d.listFocus.length; i++) {
            this.d.items[this.d.listFocus[i]].d.fontColor = this.d.focusFontColor;
            this.d.items[this.d.listFocus[i]].d.colorPadding = this.d.focusBgColor;
            this.d.items[this.d.listFocus[i]].d.colorBorder = this.d.focusBorderColor;
        }
    }
    updateHighlight() {
        for (let i = 0; i < this.d.listHighlight.length; i++) {
            this.d.items[this.d.listHighlight[i]].d.fontColor = this.d.highlightFontColor;
            this.d.items[this.d.listHighlight[i]].d.colorPadding = this.d.highlightBgColor;
            this.d.items[this.d.listHighlight[i]].d.colorBorder = this.d.highlightBorderColor;
        }
    }
    updateDim() {
        for (let i = 0; i < this.d.listDim.length; i++) {
            this.d.items[this.d.listDim[i]].d.fontColor = this.d.dimFontColor;
            this.d.items[this.d.listDim[i]].d.colorPadding = this.d.dimBgColor;
            this.d.items[this.d.listDim[i]].d.colorBorder = this.d.dimBorderColor;
        }
    }
    draw(p) {
        this.style.fillStyle = this.d.colorBg;
        p.drawFillRect(this.d.x, this.d.y, this.width(p), this.height(p), this.style);
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            item.draw(p);
        }
        return true;
    }
    addItem(content = "") {
        let item = new Text(content);
        item.d.widthMargin = 2;
        item.d.widthBorder = 2;
        item.d.widthPadding = 2;
        item.d.flagDrawMargin = false;
        item.d.flagDrawBorder = true;
        item.d.flagDrawPadding = true;
        item.d.flagDrawContentArea = false;
        item.d.flagDrawBoundingRectangle = false;
        item.d.flagDrawText = true;
        item.d.colorBorder = "#4242ff";
        item.d.colorPadding = this.d.colorBg;
        item.d.fontColor = "yellow";
        item.d.fontSize = this.d.fontSize;
        this.d.items.push(item);
    }
    setX(item, p) {
        const movableArea = this.width(p) - item.width(p);
        let answer = 0;
        switch (this.d.align) {
            case "left":
                answer = 0;
                break;
            case "right":
                answer = movableArea - this.d.paddingX;
                break;
            case "centre":
                answer = movableArea / 2;
            default:
                break;
        }
        return answer;
    }
}