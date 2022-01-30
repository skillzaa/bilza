import CtxData from "../design/ctxData.js";

export default class Ctx {
canvas:HTMLCanvasElement;
// private ctxData: CtxData; //dont need this anipattern --ctx has this.ctx which holds ctxData 
private ctx: CanvasRenderingContext2D;
private fontSize: number;//for now
private fontName: string;//for now

constructor(){
// this.ctxData = ctxDefaultInit();
this.fontName = "serf";    
this.fontSize = 25;    
// @ts-expect-error
this.canvas = document.getElementById("crown");
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
// @ts-expect-error    
this.ctx = this.canvas.getContext('2d');
}
public drawBackground(color:string="blue"){ 
this.ctx.fillStyle = color;
this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
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

public chars_width(chars="",fontSize =this.fontSize , fontName=this.fontName){
this.ctx.save();
//dont miss gap "px_"
let f = this.fontSize + "px " + this.fontName;
this.ctx.font = f;
let m = this.ctx.measureText(chars).width;
this.ctx.restore();
return Math.ceil(m);    
}
public draw_line(startX:number,startY:number,endX:number,endY:number,incomCtx:CtxData){
    this.commitCtxData(incomCtx);

    this.ctx.beginPath();
    this.ctx.moveTo(startX,startY);
    this.ctx.lineTo(endX,endY);
    this.ctx.stroke();
}
resetCtx(){    
}
public drawText(content:string,incomCtx:CtxData){
    this.commitCtxData(incomCtx);
    //--must
       this.ctx.textBaseline = "top";
    // x and y are not merged   
    this.ctx.fillText(content, incomCtx.x, incomCtx.y);
}
private commitCtxData(incomCtx:CtxData){
    
    if (incomCtx.strokeStyle !== null){
        this.ctx.strokeStyle = incomCtx.strokeStyle;
    }
    if (incomCtx.fillStyle !== null){
        this.ctx.fillStyle = incomCtx.fillStyle;
    }
    if (incomCtx.fontSize !== null){
        this.fontSize = incomCtx.fontSize;
    }
    if (incomCtx.fontName !== null){
        this.fontName = incomCtx.fontName;
    }
    this.ctx.font = this.fontSize + "px " + this.fontName;

}
}