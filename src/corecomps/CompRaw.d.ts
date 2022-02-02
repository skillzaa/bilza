import Pack from "../pack/pack.js";
import Style from "../style/style.js";
import BaseComp from "./baseComp.js";
declare class FirstData {
    frameStart: number;
    x: number | null;
    y: number | null;
    content: string | null;
    constructor(frameStart?: number);
}
export default class CompRaw extends BaseComp {
    dataTransitions: FirstData[];
    compData: FirstData;
    constructor(content?: string, x?: number, y?: number, firstdata?: FirstData, style?: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    newDataTransition(frame?: number): FirstData;
    addDataTransition(cd: FirstData): boolean;
    applyDataTransitons(frame: number): void;
    merge(subset: FirstData): boolean;
}
export {};
//# sourceMappingURL=CompRaw.d.ts.map