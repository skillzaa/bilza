import Component from "../component/component.js";
import { DrawLayer } from "../design/drawLayer.js";
import CtxData from "../design/templ.js";
export default class Grid extends Component {
    constructor() {
        super();
        this.drawLayer = DrawLayer.BackGround;
        this.cell_width = 50;
        this.cell_height = 50;
        this.show_numbers = true;
        this.numbers_fillStyle = "#b1b4c9";
        this.lineColor = "#d9dcf7";
    }
    draw(p) {
        this.draw_horizontal(p);
        this.draw_vertical(p);
        return true;
    }
    draw_horizontal(p) {
        let x = 0;
        let y = 0;
        let width = p.ctx.canvasWidth();
        let height = p.ctx.canvasHeight();
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
        let width = p.ctx.canvasWidth();
        let height = p.ctx.canvasWidth();
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
        let c = new CtxData();
        c.strokeStyle = this.lineColor;
        p.ctx.draw_line(move_to_x, move_to_y, line_to_x, line_to_y, c);
    }
    draw_number(p, numberToPrint, x, y) {
        let c = new CtxData();
        c.strokeStyle = this.lineColor;
        c.fillStyle = this.numbers_fillStyle;
        c.fontSize = 6;
        c.x = x;
        c.y = y;
        // let x = this.xy.X(this.x,this.width(p),p.ctx.canvasWidth())
        // let y = this.xy.Y(this.y,this.height(p),p.ctx.canvasHeight())
        p.ctx.drawText(numberToPrint.toString(), x, y, this.templ);
        // p.ctx.drawText(numberToPrint.toString(), c);
    }
}
//=============================
