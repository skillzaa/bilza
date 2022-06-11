import { Pack } from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/BaseComponent.js";
export default class Pic extends BaseComponent {
    img: HTMLImageElement;
    orignalWidth: number;
    orignalHeight: number;
    constructor(duration: number | undefined, imgId: string, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    private getX;
    private getY;
}
//# sourceMappingURL=pic.d.ts.map