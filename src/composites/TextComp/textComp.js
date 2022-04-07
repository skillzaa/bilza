import { Component } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import Rect from "../../components/rect/rect.js";
import Txt from "../../components/txt/txt.js";
export default class TextComp extends Component {
    constructor(content = "Text!") {
        super(DataFn);
        this.txt = new Txt(content);
        this.rect = new Rect();
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        this.txt.draw(p);
        this.rect.draw(p);
        return true;
    }
}
