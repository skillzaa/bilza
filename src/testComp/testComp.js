import Component from "../BaseComponent/Basecomponent.js";
import AniNumber from "../animation/aniNumber/aniNumber.js";
export default class TestComp extends Component {
    constructor() {
        super();
        this.xx = new AniNumber(1);
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
        this.xx.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fontSize = 80;
        p.drawText("Sec : " + Math.ceil(this.msDelta / 1000).toString(), this.xx.value(), 5, this.style);
        p.drawText(this.xx.value().toString(), 0, 150, this.style);
        return true;
    }
}
