import { Pack, IComponent, DrawLayer } from "../Bilza.js";
import Fn from "../functions/fn.js";
export default class BilzaEngineBase {
    protected pack: Pack;
    protected canvasId: string;
    protected comps: IComponent[];
    util: Fn;
    constructor(canvasId: string, canvasWidth: number, canvasHeight?: number | null);
    setCanvas(width?: number, height?: number | null): void;
    getCanvasHeight(): number;
    getCanvasWidth(): number;
    protected drawByDrawLayer(msDelta: number, drawLayer: DrawLayer, pack: Pack): boolean;
    chqCollision(x: number, y: number): IComponent | null;
    resize(width?: number, height?: number): void;
}
//# sourceMappingURL=bilzaEngineBase.d.ts.map