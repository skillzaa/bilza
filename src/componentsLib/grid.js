import Component from "../component/component.js";
export default class Grid extends Component {
    constructor() {
        super();
        this.cell_width = 50;
        this.cell_height = 50;
        this.show_numbers = true;
        this.numbers_fillStyle = "#b1b4c9";
        this.lineColor = "#d9dcf7";
    }
    draw(p, x, y) {
        this.draw_horizontal(p);
        this.draw_vertical(p);
        return true;
    }
    draw_horizontal(p) {
        let x = 0;
        let y = 0;
        let width = p.ctx().canvasWidth();
        let height = p.ctx().canvasHeight();
        //end y remain the same
        let end_x = x + width;
        do {
            this.draw_line(p, x, y, end_x, y);
            if (this.show_numbers == true) {
                this.draw_number(p, y, x, y);
            }
            y += this.cell_height;
        } while (height > y);
    }
    draw_vertical(p) {
        let x = 0;
        let y = 0;
        let width = p.ctx().canvasWidth();
        let height = p.ctx().canvasWidth();
        //end y remain the same
        let end_y = y + height;
        do {
            this.draw_line(p, x, y, x, end_y);
            if (this.show_numbers == true) {
                this.draw_number(p, x, x, y);
            }
            x += this.cell_width;
        } while (width > x);
    }
    draw_line(p, move_to_x, move_to_y, line_to_x, line_to_y) {
        p.ctx().setStrokeStyle(this.lineColor);
        p.ctx().draw_line(move_to_x, move_to_y, line_to_x, line_to_y);
    }
    draw_number(p, numberToPrint, x, y) {
        p.ctx().setFillStyle(this.numbers_fillStyle);
        p.ctx().setFont(10, "serif");
        p.ctx().drawText(numberToPrint.toString(), x, y);
    }
}
//=============================
