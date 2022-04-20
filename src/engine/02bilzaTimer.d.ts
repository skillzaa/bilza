import CompArrayObj from "./01compsArrayObj.js";
export default class BilzaTimer extends CompArrayObj {
    protected interval: number | null;
    protected msPerFrame: number;
    protected timeStart: number | null;
    protected timeEnd: number;
    constructor(lengthInSec: number);
    getTimeEnd(): number;
    setTimeEnd(n: number): number;
    protected getMsDelta(): number;
    setMsDelta(n: number): number;
    stop(): boolean;
}
//# sourceMappingURL=02bilzaTimer.d.ts.map