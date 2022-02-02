import BaseComp from "../component/baseComp.js";
import CompData from "../component/compData.js";
class TextData extends CompData {
    constructor(frameStart = 0, content = "", x = 0, y = 0) {
        super(frameStart);
        this.content = content;
        this.x = x;
        this.y = y;
    }
}
export default class Text extends BaseComp {
    constructor(frameStart, content = "", x = 0, y = 0) {
        super(x, y);
        this.compData = new TextData(0, content);
    }
    width(p) {
        return p.ctx.chars_width(this.compData.content);
        // return 200;    
    }
    height(p) {
        return p.ctx.chars_width("Xi");
    }
    draw(p) {
        let x = this.xy.X(this.x, this.width(p), p.ctx.canvasWidth());
        let y = this.xy.Y(this.y, this.height(p), p.ctx.canvasHeight());
        p.ctx.drawText(this.compData.content, x, y, this.style);
        return true;
    }
}
