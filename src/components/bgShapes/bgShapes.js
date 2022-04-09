import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class BgShapes extends Component {
    constructor(count = 100) {
        super(DataFn);
        this.d.count = count;
        this.drawLayer = DrawLayer.BackGround;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        this.style.fillStyle = "#f2edba";
        this.style.strokeStyle = "#efeee3";
        for (let i = 0; i < this.d.count; i++) {
            p.drawCircle(Math.ceil(Math.random() * p.canvasWidth()), Math.ceil(Math.random() * p.canvasHeight()), 15, true, this.style);
        }
        return true;
    }
}
