import Component from "../component/component.js";
import CtxData from "../design/ctxData.js";
export default class Text extends Component {
    constructor(content, x = 0, y = 0) {
        super();
        this.content = content;
        this.x = x;
        this.y = y;
        this.ctxData = new CtxData();
    }
    width(p) {
        return p.ctx().chars_width(this.content);
        // return 200;    
    }
    height(p) {
        return p.ctx().chars_width("Xi");
    }
    draw(p, startingX, startingY) {
        p.ctx().setFontSize(this.ctxData.fontSize);
        p.ctx().setFontName(this.ctxData.fontName);
        p.ctx().setFillStyle(this.ctxData.fillStyle);
        p.ctx().setStrokeStyle(this.ctxData.strokeStyle);
        p.ctx().drawText(this.content, startingX + this.x, startingY + this.y);
        return true;
    }
}
