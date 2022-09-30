export default class Bilza {
    constructor(canvasId = "bilza", screenWidthInPercent = 70, pack, background) {
        this.pack = pack;
        this.lastMsDelta = 0;
        this.background = background;
    }
    draw(msDelta = 0) {
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
