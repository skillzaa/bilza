import Component from "../component/component.js";
import Xy from "../design/xy.js";
import { Cornor } from "../design/cornor.js";
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
        let loc = new Xy(this.templ.x, this.templ.y, this.width(p), this.height(p), Cornor.leftTop);
        p.ctx.drawText(this.content, loc, this.templ);
        return true;
    }
}
