import IComponentPack from "./IComponentPack.js";
import Component from "../engineComponent/engineComponent.js";
export default class ComponentPack implements IComponentPack {
    id: string;
    insertAction: string;
    startTime: number;
    endTime: number;
    canvasWidth: number;
    canvasHeight: number;
    charsWidth: (chars: string, fontSize: number, fontName: string) => number;
    constructor(canvasWidth: number, canvasHeight: number, charsWidth: (chars: string, fontSize: number, fontName: string) => number);
    init(compDb: Component): void;
}
//# sourceMappingURL=componentPack.d.ts.map