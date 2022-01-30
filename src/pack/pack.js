import Ctx from "./ctx.js";
export default class Pack {
    constructor() {
        this._ctx = new Ctx();
    }
    ctx() {
        return this._ctx;
    }
    drawText(content, ctxData) {
        this._ctx.drawText(content, ctxData);
    }
    chars_width(content) {
        return this._ctx.chars_width(content);
    }
}
