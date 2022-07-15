import { IComponent, Pack } from "../bilza.js";
import RotateObj from "./60rotateObj.js";
export default class BaseComponent extends RotateObj implements IComponent {
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    drawBackground(p: Pack): void;
    drawBorder(p: Pack): void;
    preDraw(p: Pack): void;
    postDraw(p: Pack): void;
    contentY(): number;
    contentX(): number;
}
//# sourceMappingURL=00BaseComponent.d.ts.map