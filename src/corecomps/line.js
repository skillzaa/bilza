import Component from "../component/component.js";
export default class Line extends Component {
    constructor(startX, startY, endX, endY, incomTempl) {
        super();
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.style.merge(incomTempl);
    }
    width(p) {
        return this.endX - this.x;
    }
    height(p) {
        return this.endY - this.y;
    }
    draw(p) {
        let x = this.xy.X(this.x, this.width(p), p.ctx.canvasWidth());
        let y = this.xy.Y(this.y, this.height(p), p.ctx.canvasHeight());
        p.ctx.draw_line(this.startX, this.startY, this.endX, this.endY, this.style);
        return true;
    }
}
