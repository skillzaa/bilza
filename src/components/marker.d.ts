import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Marker extends BaseComponent {
    color: string;
    constructor(color?: string);
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=marker.d.ts.map