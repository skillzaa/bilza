import { Pack } from "../../../Bilza.js";
import Component from "../../../BaseComponent/Basecomponent.js";
import { ImageData } from "./imageData.js";
export default class BilzaImage extends Component<ImageData> {
    img: HTMLImageElement;
    orignalWidth: number;
    orignalHeight: number;
    constructor(duration: number | undefined, imgId: string, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    private getX;
    private getY;
}
//# sourceMappingURL=image.d.ts.map