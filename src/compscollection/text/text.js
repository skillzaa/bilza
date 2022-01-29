import Component from "../../component/component.js";
import CtxData from "../../design/ctxData.js";
export default class Text extends Component {
    constructor(content) {
        super();
        this.content = content;
        this.ctxData = new CtxData();
    }
    width(p) {
        return p.ctx().chars_width(this.content);
        // return 200;    
    }
    height(p) {
        return p.ctx().chars_width("Xi");
    }
    draw(p, x, y) {
        p.ctx().setFontSize(this.ctxData.fontSize);
        p.ctx().setFontName(this.ctxData.strokeStyle);
        p.ctx().setFillStyle(this.ctxData.fillStyle);
        p.ctx().setStrokeStyle(this.ctxData.strokeStyle);
        p.ctx().drawText(this.content, x, y);
        return true;
    }
}
