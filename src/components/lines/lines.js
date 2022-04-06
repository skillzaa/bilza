import { Component, Style } from "../../bilzaa2d/index.js";
export default class Lines extends Component {
    constructor(positions) {
        super();
        this.positions = positions;
        this.styleLine = new Style();
    }
    draw(p) {
        p.drawLines(this.positions, this.styleLine);
        return true;
    }
}
