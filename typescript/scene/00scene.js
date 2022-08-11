export default class Scene {
    constructor(startTime = 0, duration = 60) {
        this.startTime = startTime;
        this.duration = duration;
        this.comps = [];
    }
    getComps() {
        this.init();
        return this.comps;
    }
    getEndTime() {
        return this.startTime + this.duration;
    }
    getStartTime() {
        return this.startTime;
    }
    getDuration() {
        return this.duration;
    }
    init() {
    }
    push(comp) {
        this.comps.push(comp);
    }
}
