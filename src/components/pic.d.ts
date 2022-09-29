import { Pack, BaseComponent } from "../bilza.js";
export default class Pic extends BaseComponent {
    img: HTMLImageElement;
    protected orignalWidth: number;
    protected orignalHeight: number;
    constructor(imgUrl: string, width?: number, height?: number);
    init(p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=pic.d.ts.map