import Component from "../component/baseComp.js";
export default class Circle extends Component {
    constructor(x, y, radius, incomTempl) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.fill = true;
        this.style.merge(incomTempl);
    }
    width(p) {
        return this.radius * 2;
    }
    height(p) {
        return this.radius * 2;
    }
    draw(p) {
        let x = this.xy.X(this.x, this.width(p), p.ctx.canvasWidth());
        let y = this.xy.Y(this.y, this.height(p), p.ctx.canvasHeight());
        p.ctx.draw_circle(x, y, this.radius, this.fill, this.style);
        return true;
    }
}
