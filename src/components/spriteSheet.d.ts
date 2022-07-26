import { Pack, BaseComponent, AniNumber } from "../bilza.js";
export default class SpriteSheet extends BaseComponent {
    img: HTMLImageElement;
    protected orignalWidth: number;
    protected orignalHeight: number;
    row: AniNumber;
    column: AniNumber;
    private sourceWidth;
    private sourceHeight;
    totalColumns: number;
    totalRows: number;
    leftExtraPix: number;
    topExtraPix: number;
    constructor(imgUrl: string, IconWidth: number, IconHeight: number, totalColumns: number, totalRows: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    gotoImage(atFrame: number, row: number, column: number): void;
}
//# sourceMappingURL=spriteSheet.d.ts.map