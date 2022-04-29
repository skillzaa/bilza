import { Component } from "../../Bilza.js";
import Text from "../text/text.js";
import DataFn from "./DataFn.js";
export default class List extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 10, y = 10, dynWidth = 80) {
        super(DataFn, msStart, msEnd);
        this.d.x = x;
        this.d.y = y;
        this.d.dynWidth = dynWidth;
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
        }
        return ht + (this.d.paddingY);
    }
    init(p) {
        for (let i = 0; i < this.d.items.length; i++) {
            this.d.items[i].init(p);
        }
        let smallestFontSize = this.getSmallestFontSize();
        for (let i = 0; i < this.d.items.length; i++) {
            this.d.items[i].d.fontSize = smallestFontSize;
        }
        return true;
    }
    update(ms, p) {
        return true;
    }
    draw(p) {
        let x = this.d.x;
        let y = this.d.y;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            item.d.x = x;
            item.d.y = y;
            item.draw(p);
            y += item.height(p);
            y += this.d.gap;
        }
        return true;
    }
    addItem(content = "") {
        let item = new Text(this.getStartTime(), this.getEndTime(), content);
        item.d.flagDrawBorder = true;
        item.d.flagUseRelativeXY = false;
        item.d.flagUseDynResize = true;
        item.d.dynWidth = this.d.dynWidth;
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
    getSmallestFontSize() {
        if (this.d.items.length == 0) {
            return 5;
        }
        let sm = this.d.items[0].d.fontSize;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            if (item.d.fontSize < sm) {
                sm = item.d.fontSize;
            }
        }
        return sm;
    }
}
