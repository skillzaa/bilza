import Plugin from "../plugin/plugin.js";
export default class Grid extends Plugin {
    constructor() {
        super();
        this.cell_width = 50;
        this.cell_height = 50;
        this.show_numbers = true;
        this.numbers_fillStyle = "#b1b4c9";
        this.lineColor = "#d9dcf7";
    }
    draw(state, x, y) {
        this.draw_horizontal(state);
        this.draw_vertical(state);
        return true;
    }
    draw_horizontal(state) {
        let x = 0;
        let y = 0;
        let width = state.canvas.width;
        let height = state.canvas.height;
        //end y remain the same
        let end_x = x + width;
        do {
            this.draw_line(state, x, y, end_x, y);
            if (this.show_numbers == true) {
                this.draw_number(state, y, x, y);
            }
            y += this.cell_height;
        } while (height > y);
    }
    draw_vertical(state) {
        let x = 0;
        let y = 0;
        let width = state.canvas.width;
        let height = state.canvas.height;
        //end y remain the same
        let end_y = y + height;
        do {
            this.draw_line(state, x, y, x, end_y);
            if (this.show_numbers == true) {
                this.draw_number(state, x, x, y);
            }
            x += this.cell_width;
        } while (width > x);
    }
    draw_line(state, move_to_x, move_to_y, line_to_x, line_to_y) {
        state.ctx.strokeStyle = this.lineColor;
        state.ctx.beginPath();
        state.ctx.moveTo(move_to_x, move_to_y);
        state.ctx.lineTo(line_to_x, line_to_y);
        state.ctx.stroke();
    }
    draw_number(state, number, x, y) {
        state.ctx.fillStyle = this.numbers_fillStyle;
        state.ctx.font = '10px serif';
        state.ctx.textBaseline = "top";
        state.ctx.fillText(number.toString(), x, y);
    }
}
//=============================
