import { Component, DrawLayer } from "../../index.js";
import DataFn from "./DataFn.js";
export default class RandomBgShapes extends Component {
    constructor() {
        super(DataFn);
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
            p.drawCircle((Math.ceil(Math.random() * 1000)), Math.ceil(Math.random() * 600), 15, true, this.style);
        }
        return true;
    }
}
