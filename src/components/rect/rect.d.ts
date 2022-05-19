import { Pack } from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/Basecomponent.js";
export default class Rect extends BaseComponent {
    widthPercent: number;
    heightPercent: number;
    lineWidth: number;
    color: string;
    constructor();
    init(p: Pack): boolean;
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map