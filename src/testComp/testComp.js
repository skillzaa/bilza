import Component from "../BaseComponent/Basecomponent.js";
export default class TestComp extends Component {
    constructor() {
        super();
        this.msDelta = 0;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    update(msDelta, p) {
        this.msDelta = msDelta;
        return true;
    }
    draw(p) {
        this.style.fontSize = 80;
        p.drawText("Test Comp", 5, 200, this.style);
        p.drawText(this.msDelta.toString(), this.p.x, 5, this.style);
        return true;
    }
}
