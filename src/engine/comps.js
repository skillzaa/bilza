export default class Comps {
    constructor(pack) {
        this.pack = pack;
        this.compsArray = [];
    }
    init() {
        for (let i = 0; i < this.compsArray.length; i++) {
            this.compsArray[i].init(this.pack);
        }
        return true;
    }
    drawByDrawLayer(msDelta, drawLayer, pack) {
        for (let i = 0; i < this.compsArray.length; i++) {
            let comp = this.compsArray[i];
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
        if (comp.displayType == comp.displayTypeOptions.AlwaysOn) {
            return true;
        }
        if (comp.getStartTime(true) <= msDelta && comp.getEndTime(true) > msDelta) {
            return true;
        }
        return false;
    }
    resizeAll(width = 800, height = 400) {
        for (let i = 0; i < this.compsArray.length; i++) {
            const element = this.compsArray[i];
            element.resize(width, height);
        }
        return true;
    }
}
