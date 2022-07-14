import { IComponent, Pack } from "../bilza.js";
import RotateObj from "./60rotateObj.js";
export default class BaseComponent extends RotateObj implements IComponent {
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    drawBackground(p: Pack): void;
    drawBorder(p: Pack): void;
    preDraw(): void;
    postDraw(): void;
    yAlignedPadded(): number;
    xAlignedPadded(): number;
    contentWidth(): number;
    contentHeight(): number;
}
//# sourceMappingURL=00BaseComponent.d.ts.map