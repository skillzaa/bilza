import Ctx from "./ctx.js";
export default class Pack {
    constructor() {
        this._ctx = new Ctx();
    }
    ctx() {
        return this._ctx;
    }
}
