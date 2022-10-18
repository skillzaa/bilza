export default class ScreenPack {
    constructor(startTime, endTime, bilzaObj) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.bilzaObj = bilzaObj;
    }
    add(startTimePlus = 0, endTimeMinus = 0) {
        const itemStartTime = this.startTimePlus(startTimePlus);
        const itemEndTime = this.endTimeMinus(endTimeMinus);
        if (itemStartTime >= itemEndTime) {
            throw new Error("item StartTime is larger than or equal to item EndTime");
        }
        const cf = this.bilzaObj.add(itemStartTime, itemEndTime);
        return cf;
    }
    startTimePlus(sec) {
        return this.startTime + sec;
    }
    endTimeMinus(sec) {
        return this.endTime - sec;
    }
}
