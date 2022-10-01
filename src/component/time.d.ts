export default class Time {
    private endTime;
    private startTime;
    constructor(startTime: number, endTime: number);
    set(startTime: number, endTime: number): number;
    getDuration(): number;
    getStart(inSec?: boolean): number;
    getEnd(inSec?: boolean): number;
}
//# sourceMappingURL=time.d.ts.map