import { DrawLayer } from "../design/drawLayer.js";
export default class Component {
    constructor() {
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p, startingX, startingY) {
        return true;
    }
}
