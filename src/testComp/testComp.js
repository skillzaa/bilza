import Component from "../BaseComponent/Basecomponent.js";
export default class TestComp extends Component {
    constructor(name) {
        super();
        this.name = name;
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
        this.p.x.update(msDelta, p);
        this.p.y.update(msDelta, p);
        return true;
    }
    draw(p) {
        this.style.fontSize = 50;
        p.drawText(this.name + " => " + Math.ceil(this.msDelta / 1000).toString(), this.p.x.value(), this.p.y.value(), this.style);
        this.style.fontSize = 30;
        p.drawText("x:" + this.p.x.value().toString(), this.p.x.value(), this.p.y.value() + 40, this.style);
        p.drawText("y:" + this.p.y.value().toString(), this.p.x.value() + 80, this.p.y.value() + 40, this.style);
        return true;
    }
    moveX(from = 0, to = 10, startValue = 0, endValue = 100) {
        const newFrom = this.getStartTime(false) + from;
        const newTo = this.getStartTime(false) + to;
        this.p.x.increment(newFrom, newTo, startValue, endValue);
    }
}
