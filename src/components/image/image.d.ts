import { Component, Pack } from "../../Bilza.js";
import { ImageData } from "./imageData.js";
import { XAlignment } from "../../BaseComponent/xAlignment.js";
import { YAlignment } from "../../BaseComponent/yAlignment.js";
export default class BilzaImage extends Component<ImageData> {
    xAlignmentOptions: typeof XAlignment;
    yAlignmentOptions: typeof YAlignment;
    img: HTMLImageElement;
    orignalWidth: number;
    orignalHeight: number;
    constructor(startTime: number | undefined, duration: number | undefined, imgId: string, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    private getX;
    private getY;
}
//# sourceMappingURL=image.d.ts.map