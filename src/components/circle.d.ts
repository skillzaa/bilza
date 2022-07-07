import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import { AniBoolean, AniColor } from "../bilza.js";
export default class Circle extends BaseComponent {
    color: AniColor;
    filled: AniBoolean;
    constructor(color?: string);
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=circle.d.ts.map