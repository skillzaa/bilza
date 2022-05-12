export default function adjectDurationWhileInsert(comp, bilDuration, extendDuration) {
    let r = false;
    switch (comp.insertType) {
        case comp.insertTypeOptions.AlwaysOn:
            r = true;
            break;
        case comp.insertTypeOptions.Append:
            if (comp.duration() < 1) {
                throw new Error("for Insert operation to succeed you need component duration greater than 0");
            }
            comp.setStartTime(bilDuration);
            extendDuration(comp.duration());
            r = true;
            break;
        case comp.insertTypeOptions.Insert:
            if (comp.getStartTime() >= bilDuration) {
                throw new Error("to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames");
            }
            if (comp.getEndTime() <= bilDuration) {
                r = true;
            }
            else {
                let overlap = comp.getEndTime() - bilDuration;
                extendDuration(overlap);
                r = true;
            }
            break;
        default:
            break;
    }
    return r;
}
