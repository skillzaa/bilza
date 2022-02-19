import Pack from "./pack/pack.js";
import { DrawLayer } from "./design/drawLayer.js";
import Background from "./background.js";
export default class Bilzaa2d {
    constructor() {
        this.pack = new Pack();
        this.comps = [];
        this.background = new Background();
        this.totalFrames = 50; //5min
        this.frame = 0;
        this.interval = 0;
        this.mspf = 1000;
    }
    draw() {
        this.frame += 1; /// importanto
        if (this.frame >= this.totalFrames) {
            this.stop();
        }
        let c = this.pack;
        c.clearCanvas();
        c.drawBackground(this.background.color);
        this.drawBackgroundComps();
        this.drawMiddlegroundComps();
        return true;
    }
    drawMiddlegroundComps() {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            //--save ctx
            if (comp.drawLayer == DrawLayer.MiddleGround) {
                if (comp.frameStart < this.frame && comp.frameEnd > this.frame) {
                    this.pack.save();
                    comp.update(this.frame, this.pack);
                    comp.draw(this.pack);
                    //--keep both unless resetCtx has all items
                    this.pack.restore();
                    // this.pack.ctx().resetCtx();//why needed??
                }
            }
        }
        return true;
    }
    drawBackgroundComps() {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            //--save ctx
            this.pack.save();
            if (comp.drawLayer == DrawLayer.BackGround) {
                comp.draw(this.pack);
            }
            //--keep both unless resetCtx has all items
            this.pack.restore();
            //--no width for background items
        }
        return true;
    }
    add_comp(comp) {
        this.comps.push(comp);
        return comp;
    }
    add(comp) {
        this.comps.push(comp);
        return comp;
    }
    start() {
        this.interval = setInterval(() => {
            this.draw();
        }, this.mspf);
    }
    stop() {
        console.log("stopped");
        clearInterval(this.interval);
    }
} //ends
