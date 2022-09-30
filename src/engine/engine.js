import Pack from "../pack/pack.js";
export default class Bilza {
    constructor(canvasId = "bilza", canvasWidthPerc = 70, comps = [], background = null) {
        this.pack = new Pack(canvasId, canvasWidthPerc);
        ;
        this.comps = comps;
        this.background = background;
        this.lastMsDelta = 0;
    }
    draw(msDelta = 0) {
        this.pack.clearCanvas();
        this.pack.ctx.fillStyle = "green";
        this.pack.ctx.strokeStyle = "green";
        this.pack.ctx.fillRect(0, 0, 300, 300);
        this.comps[0].draw(this.pack);
    }
    drawByDrawLayer(msDelta, drawLayer, pack) {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
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
        if (comp.visible.value() == false) {
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
    start() {
        return true;
    }
    stop() {
        return true;
    }
    getLastMsDelta() {
        return this.lastMsDelta;
    }
}
