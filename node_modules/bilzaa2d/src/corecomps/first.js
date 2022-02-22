import BaseComp from "../bilzaa2d/component.js";
export default class First extends BaseComp {
    constructor() {
        super();
    }
    draw(p) {
        p.drawText("aaaaa", 100, 100, this.style);
        return true;
    }
}
