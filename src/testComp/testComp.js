import Component from "../BaseComponent/BaseComponent.js";
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
    update(msDelta, p) {
        super.update(msDelta, p);
        this.msDelta = msDelta;
        return true;
    }
    draw(p) {
        this.style.fontSize = 50;
        p.drawText(this.name + "=>" + Math.ceil(this.msDelta / 1000).toString(), this.loc.x(), this.loc.y(), this.style);
        return true;
    }
}
