import LineShapeFactory from "./lineShapesFactory.js";
export default class LineShapes {
    constructor(linker) {
        this.linker = linker;
    }
    add(startTime, endTime) {
        this.linker.setStartTime(startTime);
        this.linker.setEndTime(endTime);
        this.linker.setInsertAction("add");
        const cf = new LineShapeFactory(this.linker);
        return cf;
    }
    alwaysOn() {
        this.linker.setStartTime(0);
        this.linker.setEndTime(1);
        this.linker.setInsertAction("alwaysOn");
        const cf = new LineShapeFactory(this.linker);
        return cf;
    }
    append(duration) {
        this.linker.setStartTime(0);
        this.linker.setEndTime(duration);
        this.linker.setInsertAction("append");
        const cf = new LineShapeFactory(this.linker);
        return cf;
    }
}
