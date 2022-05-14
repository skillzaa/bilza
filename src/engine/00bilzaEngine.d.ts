import { IComponent } from "../Bilza.js";
import Background from "./background.js";
export default class Bilza {
    background: Background;
    private set;
    private duration;
    private comps;
    private stopWatch;
    private pack;
    constructor(canvasId?: string, screenWidthInPercent?: number);
    drawInit(): boolean;
    draw(): boolean;
    drawEvent(msDelta: number): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number | null): boolean;
    insert(comp: IComponent): IComponent;
    start(): boolean;
}
//# sourceMappingURL=00bilzaEngine.d.ts.map