import Background from "./background.js";
export default class Bilza {
    background: Background;
    private set;
    private insert;
    private comps;
    private stopWatch;
    private pack;
    constructor(canvasId?: string, screenWidthInPercent?: number);
    drawInit(): boolean;
    draw(): boolean;
    len(inMilliSeconds?: boolean): number;
    drawEvent(msDelta: number): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number | null): boolean;
    start(): boolean;
}
//# sourceMappingURL=00bilzaEngine.d.ts.map