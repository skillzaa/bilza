import { Pack } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class FillRect extends BaseComponent {
    constructor(color?: string);
    update(msDelta: number, p: Pack): boolean;
    contentWidth(): number;
    contentHeight(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=fillRect.d.ts.map