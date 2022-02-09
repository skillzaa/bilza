import { BaseComp, Pack, Style } from "../../bilzaa2d/index.js";
import RawData from "./rawData.js";
import RawDataNull from "./rawDataNull.js";
export default class CompRaw extends BaseComp {
    dataTransitions: RawDataNull[];
    compData: RawData;
    constructor(content?: string, x?: number, y?: number, style?: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    newDataTransition(frame?: number): RawDataNull;
    addDataTransition(cd: RawDataNull): boolean;
    applyDataTransitons(frame: number): void;
    merge(subset: RawDataNull): boolean;
}
//# sourceMappingURL=CompRaw.d.ts.map