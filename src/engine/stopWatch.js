export default class StopWatch {
    constructor() {
        this.runningStartTimeTS = null;
        this.interval = null;
        this.msPerFrame = 100;
    }
    start(drawFn) {
        this.stop();
        this.runningStartTimeTS = new Date().getTime();
        this.interval = window.setInterval(() => {
            drawFn();
        }, this.msPerFrame);
        return true;
    }
    isAlreadyRunning() {
        if (this.runningStartTimeTS !== null) {
            return false;
        }
        else {
            return true;
        }
    }
    stop() {
        this.runningStartTimeTS = null;
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
        return true;
    }
}
