import Component from "../component/component.js";
export default class Text extends Component {
    constructor(content, x = 0, y = 0) {
        super();
        this.content = content;
        this.x = x;
        this.fontSize = 100;
        this.y = y;
    }
    width(p) {
        return p.ctx().chars_width(this.content);
        // return 200;    
    }
    height(p) {
        return p.ctx().chars_width("Xi");
    }
    draw(p) {
        p.ctx().setFont(this.fontSize);
        p.ctx().drawText(this.content, this.x, this.y);
        return true;
    }
    update(frame, p) {
        for (let i = 0; i < this.animations.length; i++) {
            const ani = this.animations[i];
            if (ani.x !== null && ani.startFrame < frame) {
                this.x = ani.x;
            }
            if (ani.fontSize !== null && ani.startFrame < frame) {
                p.ctx().setFontSize(ani.fontSize);
            }
        }
        return true;
    }
}
