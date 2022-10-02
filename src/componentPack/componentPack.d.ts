import IComponentPack from "./IComponentPack.js";
export default class ComponentPack implements IComponentPack {
    id: string;
    startTime: number;
    endTime: number;
    canvasWidth: number;
    canvasHeight: number;
    charsWidth: (chars: string, fontSize: number, fontName: string) => number;
    constructor(canvasWidth: number, canvasHeight: number, charsWidth: (chars: string, fontSize: number, fontName: string) => number);
    setStartTime(startTime: number): number;
    setEndTime(endTime: number): number;
    setId(id: string): string;
}
//# sourceMappingURL=componentPack.d.ts.map