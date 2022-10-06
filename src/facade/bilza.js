import EngineDb from "../engine/engineDb.js";
import CompFactory from "./compFactory.js";
import Compiler from "../compiler/compiler.js";
export default class Bilza {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.engine = new EngineDb(canvasId, canvasWidthPerc);
        this.comps = [];
        this.background = this.engine.backgroundDb;
        this.background.alwaysOn = true;
        this.comps.push(this.background);
        this.bil = null;
    }
    add(secStart, secEnd) {
        const cf = new CompFactory(secStart, secEnd, this.comps, "add", this.engine.canvasWidth, this.engine.canvasHeight);
        return cf;
    }
    alwaysOn() {
        const cf = new CompFactory(0, 1, this.comps, "alwaysOn", this.engine.canvasWidth, this.engine.canvasHeight);
        return cf;
    }
    append(duration) {
        const cf = new CompFactory(0, duration, this.comps, "append", this.engine.canvasWidth, this.engine.canvasHeight);
        return cf;
    }
    init() {
        if (this.bil !== null) {
            return;
        }
        const compiler = new Compiler();
        this.bil = null;
        this.bil = compiler.genApp(this.engine, this.comps);
    }
    draw(timeSec = 0) {
        if (this.bil !== null) {
            this.bil.draw(timeSec);
        }
        else {
            this.init();
            this.draw();
        }
    }
    start() {
        this.init();
        if (this.bil == null) {
            throw new Error("init error");
        }
        this.bil.start();
    }
    stop() {
        if (this.bil == null) {
            throw new Error("init error");
        }
        this.bil.stop();
    }
    getEngine() {
        return this.bil;
    }
    resizeCanvas() {
    }
}
