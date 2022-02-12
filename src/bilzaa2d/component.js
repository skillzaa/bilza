import { DrawLayer } from "./design/drawLayer.js";
//--This is an Abstract class
//--Do not use CompData here but in sub-classes extend thatfor their own comp data class.
export default class Component {
    constructor() {
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
    update(frame, p) {
        return true;
    }
}
