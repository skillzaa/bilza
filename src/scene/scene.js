import CompFactory from "../facade/coreCompsFactory.js";
import LineShapeFactory from "../facade/lineShapesFactory.js";
export default class Scene {
    constructor(linker) {
        this.linker = linker;
        this.linker.setInsertAction("add");
        this.startTime = linker.startTime();
        this.endTime = linker.endTime();
    }
    add(startTimePlus = 0, endTimeMinus = 0) {
        const itemStartTime = this.startTimePlus(startTimePlus);
        const itemEndTime = this.endTimeMinus(endTimeMinus);
        if (itemStartTime >= itemEndTime) {
            throw new Error("item StartTime is larger than or equal to item EndTime");
        }
        this.linker.setStartTime(itemStartTime);
        this.linker.setEndTime(itemEndTime);
        const cf = new CompFactory(this.linker);
        return cf;
    }
    addLineShape(startTimePlus = 0, endTimeMinus = 0) {
        const itemStartTime = this.startTimePlus(startTimePlus);
        const itemEndTime = this.endTimeMinus(endTimeMinus);
        if (itemStartTime >= itemEndTime) {
            throw new Error("item StartTime is larger than or equal to item EndTime");
        }
        this.linker.setStartTime(itemStartTime);
        this.linker.setEndTime(itemEndTime);
        const cf = new LineShapeFactory(this.linker);
        return cf;
    }
    startTimePlus(sec) {
        return this.startTime + sec;
    }
    endTimeMinus(sec) {
        return this.endTime - sec;
    }
}
