import { Pack } from "../../bilza.js";
import { AniNumber } from "../../animationModule/animations.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";
export default class SpriteSheet extends BaseSpriteSheet {
    row: AniNumber;
    column: AniNumber;
    private readonly iconWidth;
    private readonly iconHeight;
    totalColumns: number;
    totalRows: number;
    constructor(imgUrl: string, iconWidth: number, iconHeight: number, totalColumns: number, totalRows: number);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    gotoSprite(atFrame: number, row: number, column: number): void;
    gotoSpriteName(atFrame: number, imageName: string): boolean;
}
//# sourceMappingURL=spriteSheet-old.d.ts.map