import { DrawLayer, Pack } from "../index.js";
import Background from "./background.js";
import AddFacade from "./addFacade/addFacade.js";
import CompActions from "./component/compActions.js";
export default class Bilzaa2d {
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    constructor(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        this.canvasId = canvasId;
        this.comps = [];
        this.background = new Background();
        this.timeStart = null;
        this.timeEnd = timeEnd;
        // this.canvasWidth = canvasWidth;//result into full screen
        // this.canvasHeight = canvasHeight; //result into full screen
        this.interval = 0;
        // this.frame = 0; 
        this.msPerFrame = 1000;
        // this.setCanvas(canvasWidth,canvasHeight);
        this.pack = new Pack(canvasWidth, canvasHeight, this.canvasId);
        this.add = new AddFacade(this.comps);
        this.compActions = new CompActions(this.comps, this.pack);
    }
    setCanvas(width = 800, height = 400) {
        this.pack = new Pack(width, height, this.canvasId);
    }
    getCanvasHeight() {
        return this.pack.canvasHeight;
    }
    getCanvasWidth() {
        return this.pack.canvasWidth;
    }
    draw() {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        // this.frame += 1; /// use later if req internally
        let msDelta = this.getMsDelta();
        //stop if completed
        if (msDelta >= this.timeEnd) {
            this.stop();
        }
        this.pack.clearCanvas();
        this.pack.drawBackground(this.background.color);
        this.drawByDrawLayer(msDelta, DrawLayer.BackGround);
        this.drawByDrawLayer(msDelta, DrawLayer.ForeGround);
        this.drawByDrawLayer(msDelta, DrawLayer.MiddleGround);
        return true;
    }
    drawByDrawLayer(msDelta, drawLayer) {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            //--save ctx
            if (comp.drawLayer == drawLayer) {
                if (comp.getStart() < msDelta && comp.getEnd() > msDelta) {
                    this.pack.save();
                    comp.update(msDelta, this.pack);
                    comp.draw(this.pack); //waoooo no msDelta
                    this.pack.restore();
                }
            }
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
    getMsDelta() {
        if (this.timeStart == null) {
            return 0;
        }
        else {
            let curTime = new Date().getTime();
            return curTime - this.timeStart;
        }
    }
    start() {
        if (this.timeStart !== null) {
            return false;
        }
        else {
            this.stop();
            this.timeStart = new Date().getTime();
            this.interval = setInterval(() => {
                this.draw();
            }, this.msPerFrame);
            return true;
        }
    }
    stop() {
        // console.log("stopped");
        this.timeStart = null;
        clearInterval(this.interval);
    }
} //ends
