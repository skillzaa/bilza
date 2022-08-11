import { Pack, BaseComponent } from "../../bilza.js";
export default class BaseSpriteSheet extends BaseComponent {
    img: HTMLImageElement;
    protected orignalWidth: number;
    protected orignalHeight: number;
    leftExtraPix: number;
    topExtraPix: number;
    constructor(imgUrl: string);
    init(p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=BaseSpriteSheet.d.ts.map