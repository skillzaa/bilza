import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import TextTemplates from "../text/textTemplates.js";
export default class Counter extends Component {
    constructor(duration = 300, loc = "rb") {
        super(DataFn, duration);
        this.drawLayer = DrawLayer.MiddleGround;
        this.tt = new TextTemplates();
        switch (loc) {
            case "rt":
                this.hdg = this.tt.rt(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
            case "rm":
                this.hdg = this.tt.rm(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
            case "rb":
                this.hdg = this.tt.rb(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
            case "lt":
                this.hdg = this.tt.lt(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
            case "lm":
                this.hdg = this.tt.lm(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
            case "lb":
                this.hdg = this.tt.lb(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
            case "mt":
                this.hdg = this.tt.mt(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
            case "mm":
                this.hdg = this.tt.mm(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
            case "mb":
                this.hdg = this.tt.mb(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
            default:
                this.hdg = this.tt.rb(this.getStartTime(), this.getEndTime(), "sec:0000", "#008000");
                break;
        }
        this.hdg.d.content = "sec:0000";
    }
    width(p) {
        return this.hdg.width(p);
        ;
    }
    height(p) {
        return this.hdg.height(p);
    }
    update(msDelat, p) {
        let frame = msDelat / 1000;
        this.hdg.d.content = this.d.prefix + parseInt(frame.toString());
        return true;
    }
    draw(p) {
        this.hdg.draw(p);
        return true;
    }
}
