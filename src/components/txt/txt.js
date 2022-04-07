import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class Txt extends Component {
    constructor(content = "") {
        super(DataFn);
        this.d.content = content;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        p.drawText(this.d.content, this.d.x, this.d.y, this.style);
        return true;
    }
}
