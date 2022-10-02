import Background from "../components/background/background.js";
import Pack from "../pack/pack.js";
import Component from "../EngineComponent/component.js";
export default class Engine {
    background: Background | null;
    private stopWatch;
    private set;
    private pack;
    private lastMsDelta;
    private duration;
    private comps;
    constructor(canvasId: string, canvasWidthPerc: number, comps: Component[] | undefined, background: Background | null | undefined, duration: number, pack: Pack);
    draw(msDelta?: number): void;
    durationInMs(): number;
    drawByDrawLayer(msDelta: number, drawLayer: 0 | 1 | 2 | 3 | 4, pack: Pack): boolean;
    private qualifyForDraw;
    start(): boolean;
    stop(): boolean;
    protected getLastMsDelta(): number;
}
//# sourceMappingURL=engine.d.ts.map