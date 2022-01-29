import State from "../design/state.js";
import SegFactory from "../design/segFactory.js";
export default class Equation {
    segment_gap: number;
    state: State;
    private segments;
    private lat_width;
    private lat_height;
    private segFactory;
    constructor(ctx: CanvasRenderingContext2D);
    add_seg(): SegFactory;
    draw(startX: number, startY: number): boolean;
    width(): number;
    height(): number;
    private add_new_segment;
}
//# sourceMappingURL=equation.d.ts.map