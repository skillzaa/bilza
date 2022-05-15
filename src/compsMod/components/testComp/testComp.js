import Component from "../../BaseComponent/Basecomponent.js";
import DataFn from "./DataFn.js";
export default class TestComp extends Component {
    constructor(duration = 300) {
        super(DataFn);
    }
    width(p) {
        return 10;
    }
    height(p) {
        return 10;
    }
    update(msDelta, p) {
        this.d.msDelta = msDelta;
        return true;
    }
    draw(p) {
        this.style.fontSize = 80;
        p.drawText("Test Comp", 5, 5, this.style);
        p.drawText(this.d.msDelta.toString(), 500, 5, this.style);
        return true;
    }
}
