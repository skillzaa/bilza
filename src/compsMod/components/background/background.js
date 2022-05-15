import { DrawLayer } from "../../../Bilza.js";
import Component from "../../BaseComponent/Basecomponent.js";
import DataFn from "./DataFn.js";
export default class Background extends Component {
    constructor(color = "#efeee3") {
        super(DataFn);
        this.d.color = color;
        this.drawLayer = DrawLayer.BackGround;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        p.drawBackground(this.d.color);
        return true;
    }
}
