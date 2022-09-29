import CompFactory from "./compFactory.js";
export default class Fascade {
    readonly canvasId: string;
    readonly canvasWidthPerc: number;
    readonly canvas: HTMLCanvasElement;
    readonly canvasWidth: number;
    readonly canvasHeight: number;
    private comps;
    constructor(canvasId?: string, canvasWidthPerc?: number);
    add(secStart: number, secEnd: number): CompFactory;
}
//# sourceMappingURL=fascade.d.ts.map