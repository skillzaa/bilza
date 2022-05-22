import Component from "../BaseComponent/Basecomponent.js";
export default class TestComp extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.msDelta = 0;
    }
    init(p) {
        super.init(p);
        return true;
    }
    width(p) {
        return 200;
    }
    height(p) {
        return 100;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.msDelta = msDelta;
        return true;
    }
    draw(p) {
        this.style.fontSize = 50;
        p.drawText(this.name + "=>" + Math.ceil(this.msDelta / 1000).toString(), this.p.x.value(), this.p.y.value(), this.style);
        return true;
    }
}
