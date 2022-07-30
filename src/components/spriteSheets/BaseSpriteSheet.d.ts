import { BaseComponent, AniNumber } from "../../bilza.js";
import ImageData from "./imageData.js";
export default class SpriteSheet extends BaseComponent {
    img: HTMLImageElement;
    protected orignalWidth: number;
    protected orignalHeight: number;
    imagesList: ImageData[];
    currentImage: AniNumber;
    constructor(imgUrl: string);
    defineImage(name: string, x: number, y: number, width: number, height: number): void;
}
//# sourceMappingURL=BaseSpriteSheet.d.ts.map