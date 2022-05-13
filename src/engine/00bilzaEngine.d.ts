import { IComponent, Pack } from "../Bilza.js";
import Background from "../components/background/background.js";
export default class Bilza {
    background: Background;
    private set;
    private duration;
    private comps;
    private stopWatch;
    protected pack: Pack;
    protected canvas: HTMLCanvasElement;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: null | number);
    drawInit(): void;
    draw(): boolean;
    drawEvent(msDelta: number): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number | null): boolean;
    insert(comp: IComponent): IComponent;
    start(): void;
    setCanvas(width?: number, height?: number | null): void;
    getCanvasHeight(): number;
    getCanvasWidth(): number;
}
//# sourceMappingURL=00bilzaEngine.d.ts.map