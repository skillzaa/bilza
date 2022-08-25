export default class Insert {
    constructor(comps, duration, charsWidth) {
        this.comps = comps;
        this.duration = duration;
        this.charsWidth = charsWidth;
    }
    insertScene(scene) {
        const comps = scene.getComps();
        for (let i = 0; i < comps.length; i++) {
            const comp = comps[i];
            if (comp.getStartTime(false) < scene.getStartTime()) {
                throw new Error("The start time of a contained component in a scene can not be smaller than the start time of the scene");
            }
            if (comp.getEndTime(false) > (scene.getEndTime())) {
                throw new Error("The end time of a contained component in a scene can not be larger than the end time of the scene");
            }
            this.add(comp, comp.getStartTime(false), comp.getEndTime());
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
    add(comp, startTime, endFrame) {
        comp.charsWidth = this.charsWidth;
        comp.setDuration(startTime, endFrame);
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
