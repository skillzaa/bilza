import { Component } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import Rect from "../../components/rect/rect.js";
import Txt from "../../components/text/text.js";
export default class TextComp extends Component {
    constructor(content = "Text!") {
        super(DataFn);
        this.txt = new Txt(content);
        this.txt.d.x = 50;
        this.txt.d.y = 50;
        this.rect = new Rect();
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    update(msDelta, p) {
        this.rect.d.x = this.txt.d.x;
        this.rect.d.y = this.txt.d.y;
        return true;
    }
    draw(p) {
        this.txt.draw(p);
        this.rect.draw(p);
        return true;
    }
}
