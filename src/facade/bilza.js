import EngineDb from "../engine/engineDb.js";
import CompFactory from "./coreCompsFactory.js";
import BackgroundDb from "../components/background/backgroundDb.js";
import Compiler from "../compiler/compiler.js";
import LineShapes from "./lineShapes.js";
import ScenePack from "../scene/scenePack.js";
import Linker from "./linker.js";
export default class Bilza {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.engine = new EngineDb(canvasId, canvasWidthPerc);
        this.comps = [];
        this.background = new BackgroundDb(this.getLinker(0, 1, "alwaysOn"), "#efeee3");
        this.background.alwaysOn = true;
        this.comps.push(this.background);
        this.bil = null;
        this.lineShapes = new LineShapes(this.getLinker(0, 1, "add"));
    }
    add(secStart, secEnd) {
        const cf = new CompFactory(this.getLinker(secStart, secEnd, "add"));
        return cf;
    }
    alwaysOn() {
        const cf = new CompFactory(this.getLinker(0, 1, "alwaysOn"));
        return cf;
    }
    append(duration) {
        const cf = new CompFactory(this.getLinker(0, duration, "append"));
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
    resizeCanvas(wd, ht) {
        if (this.bil == null) {
            throw new Error("init error");
        }
        this.bil.resizeCanvas(wd, ht);
    }
    getScenePack(startTime, endTime) {
        const sp = new ScenePack(startTime, endTime, this);
        return sp;
    }
    getLinker(startTime, endTime, insertAction) {
        const linker = new Linker(startTime, endTime, this.comps, insertAction, this.engine.canvasWidth, this.engine.canvasHeight, this.engine.charsWidth);
        return linker;
    }
}
