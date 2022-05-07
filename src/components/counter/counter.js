import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import TextTemplates from "../text/textTemplates.js";
export default class Counter extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, loc = "rb") {
        super(DataFn, msStart, msEnd);
        this.drawLayer = DrawLayer.MiddleGround;
        this.tt = new TextTemplates();
        switch (loc) {
            case "rt":
                this.hdg = this.tt.rt(msStart, msEnd, "sec", "#008000");
                break;
            case "rm":
                this.hdg = this.tt.rm(msStart, msEnd, "sec", "#008000");
                break;
            case "rb":
                this.hdg = this.tt.rb(msStart, msEnd, "sec", "#008000");
                break;
            case "lt":
                this.hdg = this.tt.lt(msStart, msEnd, "sec", "#008000");
                break;
            case "lm":
                this.hdg = this.tt.lm(msStart, msEnd, "sec", "#008000");
                break;
            case "lb":
                this.hdg = this.tt.lb(msStart, msEnd, "sec", "#008000");
                break;
            case "mt":
                this.hdg = this.tt.mt(msStart, msEnd, "sec", "#008000");
                break;
            case "mm":
                this.hdg = this.tt.mm(msStart, msEnd, "sec", "#008000");
                break;
            case "mb":
                this.hdg = this.tt.mb(msStart, msEnd, "sec", "#008000");
                break;
            default:
                this.hdg = this.tt.rb(msStart, msEnd, "sec", "#008000");
                break;
        }
        this.hdg.d.content = "sec 0";
    }
    width(p) {
        return this.hdg.width(p);
        ;
    }
    height(p) {
        return this.hdg.height(p);
    }
    update(msDelat, p) {
        this.d.frame = msDelat / 1000;
        return true;
    }
    draw(p) {
        this.hdg.d.content = this.d.prefix + parseInt(this.d.frame.toString());
        this.hdg.draw(p);
        return true;
    }
}
