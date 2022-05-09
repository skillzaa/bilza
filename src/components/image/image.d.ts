import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class Image extends Component<ObjectData> {
    source: HTMLImageElement;
    constructor(startTimeSeconds: number | undefined, endTimeSeconds: number | undefined, source: HTMLImageElement, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=image.d.ts.map