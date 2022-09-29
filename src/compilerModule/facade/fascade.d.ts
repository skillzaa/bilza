import StartTimeObj from "./baseComponentDB/startTimeObj.js";
import EndTimeObj from "./baseComponentDB/endTimeObj.js";
export default class Fascade {
    readonly canvasId: string;
    readonly canvasWidthPerc: number;
    readonly canvas: HTMLCanvasElement;
    readonly canvasWidth: number;
    readonly canvasHeight: number;
    private comps;
    constructor(canvasId?: string, canvasWidthPerc?: number);
    addTextComp(startTime: number | StartTimeObj, endTime: number | EndTimeObj): void;
}
//# sourceMappingURL=fascade.d.ts.map