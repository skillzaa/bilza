export default class StopWatch {
    private interval;
    private msPerFrame;
    private runningStartTimeTS;
    constructor();
    start(drawFn: () => boolean): boolean;
    isRunning(): boolean;
    stop(): boolean;
    getMsDelta(): number;
}
//# sourceMappingURL=stopWatch.d.ts.map