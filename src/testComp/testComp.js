import Component from "../BaseComponent/Basecomponent.js";
export default class TestComp extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.msDelta = 0;
    }
    width(p) {
        return 100;
    }
    height(p) {
        return 100;
    }
    update(msDelta, p) {
        this.msDelta = msDelta;
        this.p.x.update(msDelta, p);
        return true;
    }
    draw(p) {
        this.style.fontSize = 50;
        p.drawText(this.name + " => " + Math.ceil(this.msDelta / 1000).toString(), this.p.x.value(), 40, this.style);
        this.style.fontSize = 30;
        p.drawText("x:" + this.p.x.value().toString(), this.p.x.value(), 40, this.style);
        p.drawText("y:", this.p.x.value() + 80, 40, this.style);
        return true;
    }
}
