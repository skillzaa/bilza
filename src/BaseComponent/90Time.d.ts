import BaseComponentBase from "./99BaseComponentBase.js";
export default class Time extends BaseComponentBase {
    private _endFrame;
    private _startFrame;
    constructor();
    setTimings(startFrame: number, endFrame: number): number;
    getDuration(): number;
    getEndTime(inMilliSec?: boolean): number;
    getStartTime(inMilliSec?: boolean): number;
}
//# sourceMappingURL=90Time.d.ts.map