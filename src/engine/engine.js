import StopWatch from "./stopWatch.js";
import Settings from "./settings.js";
export default class Engine {
    constructor(engineDb, comps = [], background = null, duration, pack) {
        this.set = new Settings();
        this.stopWatch = new StopWatch();
        this.pack = pack;
        this.duration = duration;
        this.comps = comps;
        this.background = background;
        this.lastMsDelta = 0;
    }
    draw(msDelta = 0) {
        if (msDelta >= this.duration) {
            this.stopWatch.stop();
        }
        if (this.set.clearCanvasBwFrames == true) {
            this.pack.clearCanvas();
        }
        this.drawByDrawLayer(msDelta, 0, this.pack);
        this.drawByDrawLayer(msDelta, 1, this.pack);
        this.drawByDrawLayer(msDelta, 2, this.pack);
        this.drawByDrawLayer(msDelta, 3, this.pack);
    }
    durationInMs() {
        return this.duration * 1000;
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
        if (comp.time == null) {
            throw new Error("time object was found null");
        }
        if (comp.time.getStart(false) <= msDelta && comp.time.getEnd(false) > msDelta) {
            return true;
        }
        return false;
    }
    start() {
        if (this.stopWatch.isRunning() == true) {
            return false;
        }
        this.stop();
        this.stopWatch.start();
        this.drawLoop();
        return true;
    }
    drawLoop() {
        if (this.stopWatch.isRunning() == false) {
            return;
        }
        const msDelta = this.stopWatch.getMsDelta();
        if (msDelta >= this.durationInMs()) {
            this.stopWatch.stop();
        }
        if (this.set.clearCanvasBwFrames == true) {
            this.pack.clearCanvas();
        }
        this.drawByDrawLayer(msDelta, 0, this.pack);
        this.drawByDrawLayer(msDelta, 1, this.pack);
        this.drawByDrawLayer(msDelta, 2, this.pack);
        this.drawByDrawLayer(msDelta, 3, this.pack);
        this.drawByDrawLayer(msDelta, 4, this.pack);
        this.drawEvent(msDelta);
        window.requestAnimationFrame(this.drawLoop.bind(this));
        this.lastMsDelta = msDelta;
    }
    drawEvent(msDelta) {
    }
    stop() {
        this.stopWatch.stop();
        return true;
    }
    getLastMsDelta() {
        return this.lastMsDelta;
    }
    isRunning() {
        return this.stopWatch.isRunning();
    }
    resizeCanvas(width, height) {
        this.pack.resizeCanvas(width, height);
    }
}
