import { Pack, BaseComponent, AniNumber } from "../../bilza.js";
import ImageData from "./imageData.js";
export default class SpriteSheet extends BaseComponent {
    img: HTMLImageElement;
    protected orignalWidth: number;
    protected orignalHeight: number;
    imagesList: ImageData[];
    currentImage: AniNumber;
    constructor(imgUrl: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    addImage(name: string, x: number, y: number, width: number, height: number): void;
    draw(p: Pack): boolean;
    gotoImage(atFrame: number, imageName: string): boolean;
}
//# sourceMappingURL=spriteSheetIrregular.d.ts.map