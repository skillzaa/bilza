import CtxData from "../design/ctxData.js";
import ctxDefaultInit from "../design/ctxDefaultInit.js";

export default class Ctx {
canvas:HTMLCanvasElement;
private ctxData: CtxData;
private ctx: CanvasRenderingContext2D;
private fontSize: number;
private fontName: string;

constructor(){
this.ctxData = ctxDefaultInit();
this.fontName = "serf";    
this.fontSize = 25;    
// @ts-expect-error
this.canvas = document.getElementById("crown");
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
// @ts-expect-error    
this.ctx = this.canvas.getContext('2d');
}
public canvasWidth():number{
return this.canvas.width;
}
public canvasHeight():number{
return this.canvas.height;
}
public restore(){
    this.ctx.restore();
}
public save(){
    this.ctx.save();
}

public clearCanvas(){
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);    
}

public chars_width(chars="",fontSize =this.ctxData.fontSize , fontName=this.ctxData.fontName){
this.ctx.save();
//dont miss gap "px_"
let f = this.ctxData.fontSize + "px " + this.ctxData.fontName;
this.ctx.font = f;
let m = this.ctx.measureText(chars).width;
this.ctx.restore();
return Math.ceil(m);    
}
public draw_line(startX:number,startY:number,endX:number,endY:number,incomCtx:CtxData=this.ctxData){
    this.mergeCtx(incomCtx);

    this.ctx.beginPath();
    this.ctx.moveTo(startX,startY);
    this.ctx.lineTo(endX,endY);
    this.ctx.stroke();
}
public drawText(content:string,incomCtx:CtxData=this.ctxData){
    this.mergeCtx(incomCtx);
    //--must
       this.ctx.textBaseline = "top";
    // x and y are not merged   
    this.ctx.fillText(content, incomCtx.x, incomCtx.y);
}
mergeCtx(incomming :CtxData){
    
    if (incomming.strokeStyle !== null){
        this.ctx.strokeStyle = incomming.strokeStyle;
    }
    if (incomming.fillStyle !== null){
        this.ctx.fillStyle = incomming.fillStyle;
    }
    if (incomming.fontSize !== null){
        this.fontSize = incomming.fontSize;
    }
    if (incomming.fontName !== null){
        this.fontName = incomming.fontName;
    }
this.ctx.font = this.fontSize + "px " + this.fontName;

}
}