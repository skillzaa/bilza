import { Pack } from "../../bilza.js";
import { AniNumber } from "../../animationModule/animations.js";
import ImageDataOpt from "./imageDataOpt.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";
export default class SpriteSheetAlt extends BaseSpriteSheet {
    imagesList: ImageDataOpt[];
    currentImage: AniNumber;
    constructor(imgUrl: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    defineImage(name: string, x: number, y: number, width: number, height: number): void;
    gotoImageName(atFrame: number, imageName: string): boolean;
}
//# sourceMappingURL=spriteSheetAlt.d.ts.map