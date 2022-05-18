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
        this.p.x.update(msDelta);
        this.p.y.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fontSize = 80;
        p.drawText("Sec : " + Math.ceil(this.msDelta / 1000).toString(), this.p.x.value(), this.p.y.value(), this.style);
        p.drawText(this.p.x.value().toString(), 0, 150, this.style);
        return true;
    }
}
