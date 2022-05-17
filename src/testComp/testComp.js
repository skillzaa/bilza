import Component from "../BaseComponent/Basecomponent.js";
import AniNumber from "../animation/aniNumber/aniNumber.js";
export default class TestComp extends Component {
    constructor() {
        super();
        this.xx = new AniNumber(1);
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    update(msDelta, p) {
        this.xx.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fontSize = 80;
        p.drawText("Test Comp", 5, 200, this.style);
        p.drawText(this.xx.value().toString(), this.xx.value(), 5, this.style);
        return true;
    }
}
