import IEngineComp from "./IEngineComp.js";
import Pack from "../pack/pack.js";
import CoreProps from "../coreProps/engineCompCore.js";
import ComponentPack from "../componentPack/componentPack.js";
export default class Component extends CoreProps implements IEngineComp {
    constructor(componentPack: ComponentPack);
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
    compWidth(): number;
    compHeight(): number;
    contentHeight(): number;
    contentWidth(): number;
}
//# sourceMappingURL=component.d.ts.map