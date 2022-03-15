import { IDrawable } from "../index.js";
import Background from "./background.js";
import AddFacade from "./addFacade/addFacade.js";
export default class Bilzaa2d {
    comps: IDrawable[];
    private pack;
    frame: number;
    interval: number;
    canvasHeight: number;
    canvasWidth: number;
    canvasId: string;
    add: AddFacade;
    fps: number;
    frameEnd: number;
    background: Background;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: number);
    init(): void;
    draw(): boolean;
    private drawMiddlegroundComps;
    private drawBackgroundComps;
    private drawForegroundComps;
    start(): void;
    stop(): void;
}
//# sourceMappingURL=bilzaa2d.d.ts.map