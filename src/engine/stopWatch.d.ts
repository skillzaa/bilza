export default class StopWatch {
    private interval;
    private msPerFrame;
    private runningStartTimeTS;
    constructor();
    start(drawFn: () => boolean): boolean;
    isAlreadyRunning(): boolean;
    stop(): boolean;
    getMsDelta(): number;
}
//# sourceMappingURL=stopWatch.d.ts.map