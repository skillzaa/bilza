import { IComponent, Pack } from "../Bilza.js";
import Background from "../components/background/background.js";
import Fn from "../functions/fn.js";
import Settings from "./settings.js";
import Comps from "./comps.js";
export default class Bilza {
    set: Settings;
    background: Background;
    comps: Comps;
    private stopWatch;
    private _pvt_duration_val;
    protected pack: Pack;
    protected canvas: HTMLCanvasElement;
    util: Fn;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: null | number);
    drawInit(): void;
    draw(): boolean;
    drawEvent(msDelta: number): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number | null): boolean;
    duration(inMilliSeconds?: boolean): number;
    private extendDuration;
    setCanvas(width?: number, height?: number | null): void;
    getCanvasHeight(): number;
    getCanvasWidth(): number;
    insert(comp: IComponent): IComponent;
    start(): void;
}
//# sourceMappingURL=00bilzaEngine.d.ts.map