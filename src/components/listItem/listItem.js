import { Component, Style } from "../../bilzaa2d/index.js";
export default class ListItem extends Component {
    constructor(style = new Style()) {
        super(style);
        this.content = "ffff";
        this.x = 0;
        this.y = 0;
        this.rectangleStyle = new Style();
    }
    width(p) {
        return p.chars_width(this.content);
    }
    height(p) {
        return p.chars_width("Xi");
    }
    draw(p) {
        let x = this.xPerc(this.x, p);
        let y = this.yPerc(this.y, p);
        p.drawFillRect(x, y, this.width(p), this.height(p), this.rectangleStyle);
        p.drawText(this.content, x, y, this.style);
        return true;
    }
    update(frame, p) {
        this.applyStyleTransitons(frame); //--important!!
        // if (this.style.fillStyle == "")
        // this.compData.apply(frame); //--important!!
        return true;
    }
}
