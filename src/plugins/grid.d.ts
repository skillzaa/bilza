import Plugin from "../plugin/plugin.js";
import State from "../framework/state.js";
export default class Grid extends Plugin {
    numbers_fillStyle: string;
    lineColor: string;
    cell_height: number;
    cell_width: number;
    show_numbers: boolean;
    constructor();
    draw(state: State, x: number, y: number): boolean;
    draw_horizontal(state: State): void;
    draw_vertical(state: State): void;
    draw_line(state: State, move_to_x: number, move_to_y: number, line_to_x: number, line_to_y: number): void;
    draw_number(state: State, number: number, x: number, y: number): void;
}
//# sourceMappingURL=grid.d.ts.map