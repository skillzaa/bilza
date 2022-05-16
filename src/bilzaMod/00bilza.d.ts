import Background from "./background.js";
import Settings from "./settings.js";
import Insert from "./insert.js";
export default class Bilza {
    background: Background;
    insert: Insert;
    set: Settings;
    private duration;
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
//# sourceMappingURL=00bilza.d.ts.map