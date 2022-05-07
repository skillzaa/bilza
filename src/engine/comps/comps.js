export default class Comps {
    constructor(pack) {
        this.pack = pack;
        this.compsArray = [];
    }
    insert(comp) {
        this.compsArray.push(comp);
        return comp;
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
    resize(width = 800, height = 400) {
        for (let i = 0; i < this.compsArray.length; i++) {
            const element = this.compsArray[i];
            element.resize(width, height);
        }
        return true;
    }
}
