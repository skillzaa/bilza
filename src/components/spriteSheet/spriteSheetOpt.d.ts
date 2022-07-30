import { Pack, AniNumber } from "../../bilza.js";
import ImageDataOpt from "./imageDataOpt.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";
export default class SpriteSheetOpt extends BaseSpriteSheet {
    imagesList: ImageDataOpt[];
    currentImage: AniNumber;
    constructor(imgUrl: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    defineImage(name: string, x: number, y: number, width: number, height: number): void;
    gotoImage(atFrame: number, imageName: string): boolean;
}
//# sourceMappingURL=spriteSheetOpt.d.ts.map