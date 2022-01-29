import Component from "../component/component.js";
import Pack from "../pack/pack.js";
export default class Grid extends Component {
    numbers_fillStyle: string;
    lineColor: string;
    cell_height: number;
    cell_width: number;
    show_numbers: boolean;
    constructor();
    draw(p: Pack, x: number, y: number): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    draw_line(p: Pack, move_to_x: number, move_to_y: number, line_to_x: number, line_to_y: number): void;
    draw_number(p: Pack, numberToPrint: number, x: number, y: number): void;
}
//# sourceMappingURL=grid.d.ts.map