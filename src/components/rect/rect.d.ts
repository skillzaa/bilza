import { Pack } from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/Basecomponent.js";
export default class Rect extends BaseComponent {
    widthPercent: number;
    heightPercent: number;
    lineWidth: number;
    color: string;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map