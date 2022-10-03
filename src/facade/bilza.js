import EngineDb from "../engine/engineDb.js";
import CompFactory from "./compFactory.js";
import BackgroundDb from "../components/background/backgroundDb.js";
import Compiler from "../compiler/compiler.js";
export default class Bilza {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.engine = new EngineDb(canvasId, canvasWidthPerc);
        this.comps = [];
        this.background = new BackgroundDb(0, 0, "alwaysOn");
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
    start() {
        if (this.bil !== null){bil.start();}
    }
    stop() {
    }
    draw(timeSec = 0) {
        const compiler = new Compiler();
        this.bil = compiler.genApp(this.engine, this.comps);
        this.bil.draw();
        console.log("bil", this.bil);
    }
    isRunning() {
    }
    resizeCanvas() {
    }
}
