import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class FillRect extends BaseComponent {
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=fillRect.d.ts.map