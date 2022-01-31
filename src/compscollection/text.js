import Component from "../component/component.js";
export default class Text extends Component {
    constructor(content) {
        super();
        this.content = content;
    }
    width(p) {
        return p.ctx.chars_width(this.content);
        // return 200;    
    }
    height(p) {
        return p.ctx.chars_width("Xi");
    }
    draw(p) {
        let x = this.xy.X(this.x, this.width(p), p.ctx.canvasWidth());
        let y = this.xy.Y(this.y, this.height(p), p.ctx.canvasHeight());
        p.ctx.drawText(this.content, x, y, this.templ);
        return true;
    }
}
