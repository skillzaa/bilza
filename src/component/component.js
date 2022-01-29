import { DrawLayer } from "../design/drawLayer.js";
export default class Component {
    constructor() {
        this.drawLayer = DrawLayer.MiddleGround;
        this.x = 0;
        this.y = 0;
        this.frameStart = 0;
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
}
