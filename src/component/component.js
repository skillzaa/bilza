import CoreProps from "./coreProps.js";
import Style from "../design/style.js";
export default class Component extends CoreProps {
    constructor() {
        super();
        this.style = new Style();
    }
    update(msDelta, p) {
        return true;
    }
    draw(p) {
        return true;
    }
    goto(atFrame, x, y) {
        return true;
    }
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo) {
        return true;
    }
}
