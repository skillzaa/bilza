import { IDrawable } from "../index.js";
import Background from "./background.js";
import AddFacade from "./addFacade/addFacade.js";
export default class Bilzaa2d {
    private comps;
    private pack;
    private compActions;
    private interval;
    private canvasId;
    private msPerFrame;
    private timeStart;
    private timeEnd;
    add: AddFacade;
    background: Background;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: number, timeEnd?: number);
    setCanvas(width?: number, height?: number): void;
    getCanvasHeight(): () => number;
    getCanvasWidth(): () => number;
    draw(): boolean;
    private drawByDrawLayer;
    chqCollision(x: number, y: number): IDrawable | null;
    insert(comp: IDrawable): IDrawable;
    private getMsDelta;
    start(): boolean;
    stop(): void;
}
//# sourceMappingURL=bilzaa2d.d.ts.map