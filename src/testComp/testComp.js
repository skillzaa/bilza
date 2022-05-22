import Component from "../BaseComponent/Basecomponent.js";
import AnimatedNoBase from "../BaseComponent/animation/aniNumber/AnimatedNoBase.js";
export default class TestComp extends Component {
    constructor(name) {
        super();
        this.xx = new AnimatedNoBase(0);
        this.yy = new AnimatedNoBase(0);
        this.name = name;
        this.msDelta = 0;
    }
    init(p) {
        this.xx.init();
        this.yy.init();
        return true;
    }
    width(p) {
        return 200;
    }
    height(p) {
        return 100;
    }
    update(msDelta, p) {
        this.msDelta = msDelta;
        this.xx.update(msDelta);
        this.yy.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fontSize = 50;
        p.drawText(this.name + "=>" + Math.ceil(this.msDelta / 1000).toString(), this.xx.value(), this.yy.value(), this.style);
        return true;
    }
}
