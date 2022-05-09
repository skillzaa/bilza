import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class Image extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = 300, source, x = 0, y = 0) {
        super(DataFn, startTimeSeconds, endTimeSeconds);
        this.d.x = x;
        this.d.y = y;
        this.source = source;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return this.source.clientWidth;
    }
    height(p) {
        return this.source.clientHeight;
    }
    draw(p) {
        p.drawImage(this.source, p.xPerc(this.d.x), p.yPerc(this.d.y));
        return true;
    }
}
