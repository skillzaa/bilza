export default class Comps {
    constructor() {
        this.compArray = [];
    }
    push(comp) {
        this.compArray.push(comp);
        return comp;
    }
    init(pack) {
        for (let i = 0; i < this.compArray.length; i++) {
            this.compArray[i].init(pack);
        }
        return true;
    }
    drawByDrawLayer(msDelta, drawLayer, pack) {
        for (let i = 0; i < this.compArray.length; i++) {
            let comp = this.compArray[i];
            if (comp.drawLayer == drawLayer) {
                if (this.qualifyForDraw(comp, msDelta)) {
                    pack.save();
                    comp.update(msDelta, pack);
                    comp.draw(pack);
                    pack.restore();
                }
            }
        }
        return true;
    }
    qualifyForDraw(comp, msDelta) {
        if (comp.visible == false) {
            return false;
        }
        if (comp.alwaysOn == true) {
            return true;
        }
        if (comp.getStartTime(true) <= msDelta && comp.getEndTime(true) > msDelta) {
            return true;
        }
        return false;
    }
    len() {
        return this.compArray.length;
    }
}
