import Ctx from "./ctx.js";
import CtxData from "../design/ctxData.js";

export default class Pack {
private _ctx:Ctx;
constructor(){
this._ctx = new Ctx();
}
ctx(){
return this._ctx;
}
drawText(content:string,ctxData :CtxData){
this._ctx.drawText(content,ctxData);
}
chars_width(content:string):number{
    return this._ctx.chars_width(content);
}

// draw_line(startX:number,startY:number,endX:number,endY:number,incomCtx:CtxData){

// }
}