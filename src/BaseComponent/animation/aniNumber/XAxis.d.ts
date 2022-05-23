import AnimatedNoBase from "./AnimatedNoBase.js";
import { XAlignment } from "../../../design/xAlignment.js";
export default class XAxis extends AnimatedNoBase {
    readonly xAlignmentOptions: typeof XAlignment;
    xAlign: XAlignment;
    constructor(defaultValue: number);
    private translateOffScreen;
    update(msDelta: number): boolean;
    value(): number;
    private initIncDec;
    private adjestAlign;
}
//# sourceMappingURL=XAxis.d.ts.map