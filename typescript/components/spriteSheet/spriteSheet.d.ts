import { Pack, AniNumber } from "../../bilza.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";
import ImageData from "./imageData.js";
export default class SpriteSheet extends BaseSpriteSheet {
    imagesList: ImageData[];
    row: AniNumber;
    column: AniNumber;
    private iconWidth;
    private iconHeight;
    totalColumns: number;
    totalRows: number;
    constructor(imgUrl: string, iconWidth: number, iconHeight: number, totalColumns: number, totalRows: number);
    update(msDelta: number, p: Pack): boolean;
    defineImage(name: string, column: number, row: number): void;
    draw(p: Pack): boolean;
    gotoImage(atFrame: number, row: number, column: number): void;
    gotoImageName(atFrame: number, imageName: string): boolean;
}
//# sourceMappingURL=spriteSheet.d.ts.map