import { IComponent, Pack } from "../bilza.js";
import RotateObj from "./60rotateObj.js";
export default class BaseComponent extends RotateObj implements IComponent {
    private _canvasWidth;
    private _canvasHeight;
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    protected drawBackground(p: Pack): void;
    protected drawBorder(p: Pack): void;
    protected drawContentAreaBorder(p: Pack): void;
    protected preDraw(p: Pack): void;
    protected postDraw(p: Pack): void;
    protected contentY(): number;
    protected contentX(): number;
    setPaddings(n: number): void;
    setxy(x: number, y?: number | null): void;
    canvasHeight(): number;
    canvasWidth(): number;
}
//# sourceMappingURL=00BaseComponent.d.ts.map