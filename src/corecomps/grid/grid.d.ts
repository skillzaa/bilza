import { BaseComp, Pack, Style } from "../../bilzaa2d/index.js";
export default class Grid extends BaseComp {
    cell_height: number;
    cell_width: number;
    show_numbers: boolean;
    lineStyle: Style;
    constructor();
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
}
//# sourceMappingURL=grid.d.ts.map