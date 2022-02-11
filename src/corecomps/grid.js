import { Component, Style, DrawLayer } from "../bilzaa2d/index.js";
export default class Grid extends Component {
    constructor() {
        super();
        this.styleLine = new Style();
        this.styleNumber = new Style();
        this.drawLayer = DrawLayer.BackGround;
        this.cell_width = 50;
        this.cell_height = 50;
        this.show_numbers = false;
    }
    draw(p) {
        this.draw_horizontal(p);
        this.draw_vertical(p);
        return true;
    }
    draw_horizontal(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasHeight();
        //end y remain the same
        let end_x = x + width;
        do {
            // this.draw_line(p,x,y,end_x,y);
            p.drawLine(x, y, end_x, y, this.styleLine);
            if (this.show_numbers == true) {
                p.drawText(y.toString(), x, y, this.styleNumber);
            }
            y += this.cell_height;
        } while (height > y);
    }
    draw_vertical(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasWidth();
        //end y remain the same
        let end_y = y + height;
        do {
            // this.draw_line(p,x,y,x,end_y);
            p.drawLine(x, y, x, end_y, this.styleLine);
            if (this.show_numbers == true) {
                p.drawText(x.toString(), x, y, this.styleNumber);
            }
            x += this.cell_width;
        } while (width > x);
    }
}
//=============================
