import State from "../design/state.js";
import LineSeg from "../lineSeg/lineSeg.js";
import IDrawable from "../design/IDrawable.js";
export default class Frac implements IDrawable {
    private state;
    top: LineSeg;
    bot: LineSeg;
    divider_gap: number;
    constructor(state: State);
    draw(x: number, y: number): boolean;
    width(): number;
    height(): number;
}
//# sourceMappingURL=frac.d.ts.map