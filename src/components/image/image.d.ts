import { Component, Pack } from "../../Bilza.js";
import { ImageData } from "./imageData.js";
export default class Image extends Component<ImageData> {
    source: HTMLImageElement;
    constructor(startTimeSeconds: number | undefined, endTimeSeconds: number | undefined, source: HTMLImageElement, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=image.d.ts.map