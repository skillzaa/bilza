import { DrawLayer } from "../design/drawLayer.js";
import AniCtxData from "./aniCtxData.js";
export default class Component {
    constructor() {
        this.drawLayer = DrawLayer.MiddleGround;
        this.x = 0;
        this.animations = [];
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
    update(frame, p) {
        return true;
    }
    addAnimation(frame = 0) {
        let sa = new AniCtxData(frame);
        this.animations.push(sa);
        return sa;
    }
}
