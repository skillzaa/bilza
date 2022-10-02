import IEngineComp from "./IEngineComp.js";
import Pack from "../pack/pack.js";
import CoreProps from "./coreProps.js";
import Style from "../pack/style.js";
import Time from "./time.js";
import ComponentPack from "../compiler/componentPack.js";
export default class Component extends CoreProps implements IEngineComp {
    protected style: Style;
    time: Time;
    compPack: ComponentPack;
    constructor(startTime: number, endTime: number, componentPack: ComponentPack);
    protected preDrawNonBoxed(p: Pack): void;
    update(msDelta: number, p: Pack): boolean;
    canvasWidth(): number;
    canvasHeight(): number;
    draw(p: Pack): boolean;
    goto(atFrame: number, x: number, y: number): boolean;
    protected preDraw(p: Pack): void;
    protected postDraw(p: Pack): void;
    protected contentX(): number;
    protected contentY(): number;
    protected applyRotation(p: Pack): void;
    protected removeRotation(p: Pack): void;
    protected drawBorder(p: Pack): void;
    protected drawBackground(p: Pack): void;
    xRotateAligned(): number;
    yRotateAligned(): number;
    xAligned(): number;
    yAligned(): number;
    align(x?: 0 | 1 | 2 | null, y?: 0 | 1 | 2 | null): void;
    alignRotate(x?: 0 | 1 | 2 | null, y?: 0 | 1 | 2 | null): void;
    compWidth(): number;
    compHeight(): number;
    contentHeight(): number;
    contentWidth(): number;
    setPaddings(n: number): void;
    setxy(x: number, y?: number | null): void;
}
//# sourceMappingURL=component.d.ts.map