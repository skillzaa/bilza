import AnimatedNoBase from "./AnimatedNoBase.js";
import { XAlignment } from "../../../design/xAlignment.js";
export default class XAxis extends AnimatedNoBase {
    readonly xAlignmentOptions: typeof XAlignment;
    xAlign: XAlignment;
    private compWidth;
    private compHeight;
    constructor(defaultValue: number);
    init(compWidth: number, compHeight: number, canvasWidth: number, canvasHeight: number): boolean;
    update(msDelta: number): boolean;
}
//# sourceMappingURL=XAxis.d.ts.map