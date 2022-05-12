export default class StopWatch {
    private interval;
    private msPerFrame;
    private runningStartTimeTS;
    constructor();
    start(drawFn: () => boolean): boolean;
    isAlreadyRunning(): boolean;
    stop(): boolean;
}
//# sourceMappingURL=stopWatch.d.ts.map