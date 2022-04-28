import Fn from "../functions/fn.js";
export default class CompsArrayObj {
    constructor() {
        this.comps = [];
        this.util = new Fn();
    }
    drawByDrawLayer(msDelta, drawLayer, pack) {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            if (comp.drawLayer == drawLayer) {
                if (comp.getStartTime() <= msDelta && comp.getEndTime() > msDelta) {
                    pack.save();
                    comp.update(msDelta, pack);
                    comp.draw(pack);
                    pack.restore();
                }
            }
        }
        return true;
    }
    chqCollision(x, y) {
        return null;
    }
    insert(comp) {
        this.comps.push(comp);
        return comp;
    }
    resize(width = 800, height = 400) {
        for (let i = 0; i < this.comps.length; i++) {
            const element = this.comps[i];
            element.resize(width, height);
        }
    }
}
