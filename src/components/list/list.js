import { Component } from "../../Bilza.js";
import Text from "../text/text.js";
import DataFn from "./DataFn.js";
export default class List extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 10, y = 10, widthPerc = 80) {
        super(DataFn, msStart, msEnd);
        this.d.x = x;
        this.d.y = y;
        this.d.widthPerc = widthPerc;
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
            y += item.width(p);
        }
        return true;
    }
    addItem(content = "") {
        let item = new Text(this.getStartTime(), this.getEndTime(), content);
        item.d.flagDrawBorder = true;
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
