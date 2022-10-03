import Pack from "../pack/pack.js";
import CompEngineCore from "./compEngineCore.js";
import CorePropsDb from "../compDb/corePropsDb";
export default class CompEngine extends CompEngineCore {
    constructor(compDb: CorePropsDb, pack: Pack);
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
//# sourceMappingURL=compEngine.d.ts.map