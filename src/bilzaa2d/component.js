import { DrawLayer } from "./design/drawLayer.js";
import Xy from "./design/xy.js";
//--This is an Abstract class
//--Do not use CompData here but in sub-classes extend thatfor their own comp data class.
export default class Component {
    constructor() {
        this.xy = new Xy();
        this.drawLayer = DrawLayer.MiddleGround;
        this.frameStart = 0; //component startand end frames
        this.frameEnd = 3000;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        return true;
    }
    /**
     * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super to apply transitions your self.
     */
    update(frame, p) {
        return true;
    }
    xPerc(n, p) {
        let xy = new Xy();
        return xy.X(n, this.width(p), p.canvasWidth());
    }
    yPerc(n, p) {
        let xy = new Xy();
        return xy.X(n, this.width(p), p.canvasWidth());
    }
}
