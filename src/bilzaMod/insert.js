export default class Insert {
    constructor(comps, duration, charsWidth) {
        this.comps = comps;
        this.duration = duration;
        this.charsWidth = charsWidth;
    }
    addScene(scene, startTimeSec) {
        const comps = scene.getComps();
        for (let i = 0; i < comps.length; i++) {
            const comp = comps[i];
            this.add(comp, comp.getStartTime(false), comp.getEndTime(false));
        }
    }
    append(comp, duration) {
        comp.charsWidth = this.charsWidth;
        const startingFrame = this.duration.len(false);
        const endFrame = startingFrame + duration;
        comp.setTimings(startingFrame, endFrame);
        this.duration.extend(comp.getDuration());
        return this.comps.push(comp);
    }
    add(comp, startTime, endTime) {
        comp.charsWidth = this.charsWidth;
        comp.setTimings(startTime, endTime);
        if (comp.getStartTime(false) > this.duration.len(false)) {
            this.duration.set(comp.getStartTime(false));
        }
        if (comp.getEndTime(false) > this.duration.len(false)) {
            let overlap = comp.getEndTime(false) - this.duration.len(false);
            this.duration.extend(overlap);
        }
        return this.comps.push(comp);
    }
    alwaysOn(comp) {
        comp.charsWidth = this.charsWidth;
        comp.alwaysOn = true;
        return this.comps.push(comp);
    }
}
