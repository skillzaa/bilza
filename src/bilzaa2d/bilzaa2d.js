import Pack from "./pack/pack.js";
import { DrawLayer } from "./design/drawLayer.js";
import Background from "./background.js";
export default class Bilzaa2d {
    constructor(frameEnd = 50) {
        this.pack = new Pack();
        this.comps = [];
        this.background = new Background();
        this.frameEnd = frameEnd;
        this.interval = 0;
        this.frame = 0;
        this.fps = 1000;
    }
    draw() {
        this.frame += 1; /// importanto
        //stop if completed
        if (this.frame >= this.frameEnd) {
            this.stop();
        }
        this.pack.clearCanvas();
        this.pack.drawBackground(this.background.color);
        this.drawBackgroundComps();
        this.drawMiddlegroundComps();
        this.drawForegroundComps();
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
                    this.pack.restore();
                }
            }
        }
        return true;
    }
    drawBackgroundComps() {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            if (comp.drawLayer == DrawLayer.BackGround) {
                this.pack.save();
                comp.update(this.frame, this.pack);
                comp.draw(this.pack);
            }
            this.pack.restore();
        }
        return true;
    }
    drawForegroundComps() {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            if (comp.drawLayer == DrawLayer.ForeGround) {
                this.pack.save();
                comp.update(this.frame, this.pack);
                comp.draw(this.pack);
            }
            this.pack.restore();
        }
        return true;
    }
    add(comp) {
        this.comps.push(comp);
        return comp;
    }
    start() {
        this.interval = setInterval(() => {
            this.draw();
        }, this.fps);
    }
    stop() {
        console.log("stopped");
        clearInterval(this.interval);
    }
} //ends
