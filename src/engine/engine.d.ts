import IEngineComp from "../component/IEngineComp.js";
import Background from "../components/background.js";
import Pack from "../pack/pack.js";
export default class Bilza {
    background: Background | null;
    private pack;
    private lastMsDelta;
    private comps;
    constructor(canvasId?: string, canvasWidthPerc?: number, comps?: IEngineComp[], background?: Background | null);
    draw(msDelta?: number): void;
    drawByDrawLayer(msDelta: number, drawLayer: 0 | 1 | 2 | 3 | 4, pack: Pack): boolean;
    private qualifyForDraw;
    start(): boolean;
    stop(): boolean;
    protected getLastMsDelta(): number;
}
//# sourceMappingURL=engine.d.ts.map