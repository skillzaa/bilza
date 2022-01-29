import Ctx from "./ctx.js";

export default class Pack {
private _ctx:Ctx;
constructor(){
this._ctx = new Ctx();
}
ctx(){
return this._ctx;
}
}