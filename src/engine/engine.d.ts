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
    private drawByDrawLayer;
    private qualifyForDraw;
    start(): boolean;
    private drawLoop;
    drawEvent(msDelta: number): void;
    stop(): boolean;
    protected getLastMsDelta(): number;
    init(): void;
    isRunning(): boolean;
}
//# sourceMappingURL=engine.d.ts.map