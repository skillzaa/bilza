import CompArrayObj from "./compsArrayObj.js";
export default class BilzaTimer extends CompArrayObj {
    protected interval: number | null;
    protected msPerFrame: number;
    protected timeStart: number | null;
    protected timeEnd: number;
    constructor(timeEnd?: number);
    getTimeEnd(): number;
    setTimeEnd(n: number): number;
    protected getMsDelta(): number;
    stop(): boolean;
}
//# sourceMappingURL=bilzaTimer.d.ts.map