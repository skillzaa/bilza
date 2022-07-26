import { Pack, BaseComponent } from "../bilza.js";
export default class SpriteSheet extends BaseComponent {
    img: HTMLImageElement;
    protected orignalWidth: number;
    protected orignalHeight: number;
    constructor(imgUrl: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    gotoImage(atFrame: number, row: number, column: number): void;
}
//# sourceMappingURL=spriteSheetIrregular.d.ts.map