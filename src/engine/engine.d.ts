import Background from "../components/background.js";
import Pack from "../pack/pack.js";
export default class Bilza {
    background: Background;
    private pack;
    private lastMsDelta;
    constructor(canvasId: string | undefined, screenWidthInPercent: number | undefined, pack: Pack, background: Background);
    draw(msDelta?: number): void;
    start(): boolean;
    stop(): boolean;
    getLastMsDelta(): number;
}
//# sourceMappingURL=engine.d.ts.map