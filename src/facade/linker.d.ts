import { IComponent } from "../bilza.js";
import CompDb from "../compDb/compDb.js";
export default class Linker {
    private _startTime;
    private _endTime;
    private _insertAction;
    private readonly _canvasWidth;
    private readonly _canvasHeight;
    private comps;
    readonly charsWidth: (chars: string, fontSize: number, fontName: string) => number;
    constructor(startTime: number, endTime: number, comps: IComponent[], insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, charsWidth: (chars: string, fontSize: number, fontName: string) => number);
    canvasWidth(): number;
    canvasHeight(): number;
    startTime(): number;
    endTime(): number;
    insertAction(): "add" | "append" | "alwaysOn";
    setStartTime(startTime: number): void;
    setEndTime(endTime: number): void;
    setInsertAction(insertAction: "add" | "append" | "alwaysOn"): void;
    push(compDb: CompDb): void;
}
//# sourceMappingURL=linker.d.ts.map