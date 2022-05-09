import { Component, Pack } from "../../Bilza.js";
import { ImageData } from "./imageData.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
export default class BilzaImage extends Component<ImageData> {
    xAlignmentOptions: typeof XAlignment;
    yAlignmentOptions: typeof YAlignment;
    img: HTMLImageElement;
    initialWidth: number;
    initialHeight: number;
    constructor(startTimeSeconds: number | undefined, endTimeSeconds: number | undefined, imgId: string, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    private getX;
    private getY;
}
//# sourceMappingURL=image.d.ts.map