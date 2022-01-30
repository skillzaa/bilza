import Ctx from "./ctx.js";
import CtxData from "../design/ctxData.js";
export default class Pack {
    private _ctx;
    constructor();
    ctx(): Ctx;
    drawText(content: string, ctxData: CtxData): void;
    chars_width(content: string): number;
}
//# sourceMappingURL=pack.d.ts.map