import Component from "../component/baseComp.js";
export default class FillRectangle extends Component {
    constructor(x, y, width, height, incomTempl) {
        super();
        this.x = x;
        this.y = y;
        this.rectWidth = width;
        this.rectHeight = height;
        this.style.merge(incomTempl);
    }
    width(p) {
        return this.rectWidth;
    }
    height(p) {
        return this.rectHeight;
    }
    draw(p) {
        let x = this.xy.X(this.x, this.width(p), p.ctx.canvasWidth());
        let y = this.xy.Y(this.y, this.height(p), p.ctx.canvasHeight());
        p.ctx.draw_fillRect(this.x, this.y, this.rectWidth, this.rectHeight, this.style);
        return true;
    }
}
