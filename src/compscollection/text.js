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
        p.ctx.drawText(this.content, this.ctxData);
        return true;
    }
}
