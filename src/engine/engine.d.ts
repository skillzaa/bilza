import Background from "../components/background/background.js";
import Pack from "../pack/pack.js";
import Component from "../compEngine/compEngine.js";
import EngineDb from "./engineDb.js";
export default class Engine {
    background: Background | null;
    private stopWatch;
    private set;
    private pack;
    private lastMsDelta;
    readonly duration: number;
    private comps;
    constructor(engineDb: EngineDb, comps: Component[] | undefined, background: Component | null | undefined, duration: number, pack: Pack);
    draw(msDelta?: number): void;
    durationInMs(): number;
    drawByDrawLayer(msDelta: number, drawLayer: 0 | 1 | 2 | 3 | 4, pack: Pack): boolean;
    private qualifyForDraw;
    start(): boolean;
    stop(): boolean;
    protected getLastMsDelta(): number;
}
//# sourceMappingURL=engine.d.ts.map