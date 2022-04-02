import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class RandomBgShapes extends Component {
    constructor() {
        super(DataFn);
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return this.d.width;
    }
    height(p) {
        return this.d.height;
    }
    draw(p) {
        this.style.fillStyle = this.d.colorFill;
        this.style.strokeStyle = this.d.colorBorder;
        let newX = p.xPerc(this.d.x);
        let newY = p.yPerc(this.d.y);
        p.drawFillRect(newX, newY, this.d.width, this.d.height, this.style);
        return true;
    }
    resize(canvasWidth, canvasHeight) {
    }
}
