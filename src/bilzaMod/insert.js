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
            const compDuration = comp.getDuration();
            const compStartTime = comp.getStartTime(false);
            '';
            this.add(comp, startTimeSec + compStartTime, startTimeSec + compStartTime + compDuration);
        }
    }
    append(comp, duration) {
        comp.charsWidth = this.charsWidth;
        const startingFrame = this.duration.len(false);
        const endFrame = startingFrame + duration;
        comp.setDuration(startingFrame, endFrame);
        this.duration.extend(comp.getDuration());
        return this.comps.push(comp);
    }
    add(comp, startTime, endTime) {
        comp.charsWidth = this.charsWidth;
        comp.setDuration(startTime, endTime);
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
