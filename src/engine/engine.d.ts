import IEngineComp from "../component/IEngineComp.js";
import Background from "../components/background.js";
import Pack from "../pack/pack.js";
export default class Engine {
    background: Background | null;
    private stopWatch;
    private set;
    private pack;
    private lastMsDelta;
    private duration;
    private comps;
    constructor(canvasId: string | undefined, canvasWidthPerc: number | undefined, comps: IEngineComp[] | undefined, background: Background | null | undefined, duration: number);
    draw(msDelta?: number): void;
    durationInMs(): number;
    drawByDrawLayer(msDelta: number, drawLayer: 0 | 1 | 2 | 3 | 4, pack: Pack): boolean;
    private qualifyForDraw;
    start(): boolean;
    stop(): boolean;
    protected getLastMsDelta(): number;
}
//# sourceMappingURL=engine.d.ts.map