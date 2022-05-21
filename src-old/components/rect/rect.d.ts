import { Pack } from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/Basecomponent.js";
export default class Rect extends BaseComponent {
    dynWidth: number;
    dynHeight: number;
    lineWidth: number;
    color: string;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map