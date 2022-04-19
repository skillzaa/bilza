import TextBase from "./textBase.js";
export default class Text extends TextBase {
    constructor(content = "", color = "black", x = 0, y = 0, widthPercent = 10, heightPercent = 10) {
        super(content, color, x, y, widthPercent, heightPercent);
    }
}
