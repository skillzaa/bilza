import { IComponent, Pack } from "../Bilza.js";
import Background from "./background.js";
export default class Bilza {
    background: Background;
    private set;
    private duration;
    private comps;
    private stopWatch;
    protected pack: Pack;
    constructor(canvasId?: string, screenWidthInPercent?: number);
    drawInit(): void;
    draw(): boolean;
    drawEvent(msDelta: number): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number | null): boolean;
    insert(comp: IComponent): IComponent;
    start(): void;
}
//# sourceMappingURL=00bilzaEngine.d.ts.map