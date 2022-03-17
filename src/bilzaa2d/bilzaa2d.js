import { DrawLayer, Pack } from "../index.js";
import Background from "./background.js";
import AddFacade from "./addFacade/addFacade.js";
import CompActions from "./component/compActions.js";
export default class Bilzaa2d {
    constructor(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350) {
        this.canvasId = canvasId;
        this.comps = [];
        this.background = new Background();
        this.frameEnd = 500;
        this.canvasWidth = canvasWidth; //result into full screen
        this.canvasHeight = canvasHeight; //result into full screen
        this.interval = 0;
        this.frame = 0;
        this.fps = 1000;
        this.pack = new Pack(this.canvasWidth, this.canvasHeight, this.canvasId);
        this.add = new AddFacade(this.comps);
        this.compActions = new CompActions(this.comps, this.pack);
    }
    init() {
        this.pack = new Pack(this.canvasWidth, this.canvasHeight, this.canvasId);
    }
    draw() {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
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
    chqCollision(x, y) {
        return this.compActions.chqCollision(x, y);
    }
    insert(comp) {
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
