import { Pack, AniNumber } from "../../bilza.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";
export default class SpriteSheet extends BaseSpriteSheet {
    row: AniNumber;
    column: AniNumber;
    private iconWidth;
    private iconHeight;
    totalColumns: number;
    totalRows: number;
    constructor(imgUrl: string, iconWidth: number, iconHeight: number, totalColumns: number, totalRows: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    gotoImage(atFrame: number, row: number, column: number): void;
}
//# sourceMappingURL=spriteSheet.d.ts.map