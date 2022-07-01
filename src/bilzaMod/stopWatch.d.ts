export default class StopWatch {
    private interval;
    private _stopFlag;
    private msPerFrame;
    runningStartTimeTS: number | null;
    constructor();
    isRunning(): boolean;
    shouldStop(): boolean;
    stop(): boolean;
    start(): boolean;
    getMsDelta(): number;
}
//# sourceMappingURL=stopWatch.d.ts.map