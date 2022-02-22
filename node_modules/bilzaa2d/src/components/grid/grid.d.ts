import { Component, Pack, Style } from "../../bilzaa2d/index.js";
import GridTemplates from "./gridTemplates.js";
export { GridTemplates };
export default class Grid extends Component {
    cell_height: number;
    cell_width: number;
    show_numbers: boolean;
    styleLine: Style;
    styleNumber: Style;
    constructor();
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
}
//# sourceMappingURL=grid.d.ts.map