import { BaseComp, Pack, Style } from "../../bilzaa2d/index.js";
export default class FrameCounter extends BaseComp {
    frame: number;
    rectStyle: Style;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    update(frame: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=frameCounter.d.ts.map