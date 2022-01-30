import Component from "../component/component.js";
export default class Text extends Component {
    constructor(content, x = 0, y = 0) {
        super();
        this.content = content;
    }
    width(p) {
        return p.chars_width(this.content);
        // return 200;    
    }
    height(p) {
        return p.chars_width("Xi");
    }
    draw(p) {
        p.drawText(this.content, this.ctxData);
        return true;
    }
}
