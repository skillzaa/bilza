import BaseComp from "../component/baseComp.js";
export default class First extends BaseComp {
    constructor() {
        super();
    }
    draw(p) {
        p.ctx.drawText("aaaaa", 100, 100, this.style);
        return true;
    }
}
