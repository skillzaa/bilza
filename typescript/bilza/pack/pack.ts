import Style from "./style.js";
import Position from "../design/Position.js";
export default class Pack {
canvas :HTMLCanvasElement;
ctx :CanvasRenderingContext2D;

constructor(width=0,height=0,canvasId="bilzaa2d"){
let lookForCanvas = document.getElementById(canvasId)as HTMLCanvasElement;
if (lookForCanvas == null){
    this.canvas = document.createElement('canvas');
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(this.canvas);

}else {
    this.canvas = lookForCanvas;
}   
this.canvas.id = canvasId; // Html5 canvas does not have id
this.canvas.width = width;
this.canvas.height = height;
this.canvas.style.position = "static";
this.canvas.style.border = "1px solid blue";
    
if (this.canvas == null ){
    throw new Error("canvas not found");
}
if (width == 0){
    this.canvas.width = window.innerWidth;
}else{
    this.canvas.width = width;
}
if (height == 0){
    this.canvas.height = window.innerHeight;
}else{
    this.canvas.height = height;
}
//===========================
this.ctx  = this.canvas.getContext('2d') as CanvasRenderingContext2D;
if (this.ctx == null ){
    throw new Error("could not obtain drawing context");
}    
}
//--- look at this fn again
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
public quadraticCurveTo(start :Position,end :Position,controlPoint :Position, style :Style){
    this.commitCtxData(style);
    this.beginPath();
this.moveTo(start);
this.ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, end.x, end.y);
this.stroke();
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

public charsWidth(chars="",fontSize:number,fontName:string){
this.ctx.save();
//--no commitCtxData thus setFont is required
this.setFont(fontSize,fontName);

let m = this.ctx.measureText(chars).width;
this.ctx.restore();
return Math.ceil(m);    
}
public textWidth(chars:string,incomTempl:Style){
    this.ctx.save();
    this.commitCtxData(incomTempl);
//not required since its done in commitCtxData
    // this.setFont(incomTempl.fontSize,incomTempl.fontName);
let m = this.ctx.measureText(chars).width;
this.ctx.restore();
return Math.ceil(m);    
}
public drawLine(startX:number,startY:number,endX:number,endY:number,incomTempl:Style){
    this.commitCtxData(incomTempl);
    this.ctx.beginPath();
    this.ctx.moveTo(startX,startY);
    this.ctx.lineTo(endX,endY);
    this.ctx.stroke();
}
public line(startX:number,startY:number,endX:number,endY:number){
    this.ctx.beginPath();
    this.ctx.moveTo(startX,startY);
    this.ctx.lineTo(endX,endY);
    this.ctx.stroke();
}
public beginPath(){
    this.ctx.beginPath();
}
public closePath(){
    this.ctx.closePath();
}
public moveTo(pos :Position){
    this.ctx.moveTo(pos.x,pos.y);
}
public lineTo(x :number,y :number,style:Style){
    this.commitCtxData(style);
    this.ctx.lineTo(x,y);
}
public fill(style:Style){
    this.commitCtxData(style);
    this.ctx.fill();
}
public stroke(){
    this.ctx.stroke();
}
public drawRect(x :number, y:number, width:number,height:number,incomCtx:Style){
    this.commitCtxData(incomCtx);
this.ctx.beginPath();
this.ctx.rect(x,y,width,height);
this.ctx.stroke();
}
public drawFillRect(x :number, y:number, width:number,height:number,incomCtx:Style){
    this.commitCtxData(incomCtx);
    this.ctx.fillRect(x,y,width,height);
}
public arcTo(start:Position,end:Position,style :Style,radius :number=20){
this.commitCtxData(style);

this.ctx.arcTo(start.x,start.y,end.x,end.y,radius);    
}
public drawCircle(x :number, y:number, radius:number,fill :boolean,incomCtx:Style,startAngle=0 , endAngle= 2 * Math.PI){
this.commitCtxData(incomCtx);
this.ctx.beginPath();
this.ctx.arc(x + radius, y+radius, radius, startAngle, endAngle, false);
                if (fill == true){
                    this.ctx.fill();
                }
this.ctx.stroke();
}
public drawText(content:string,x:number,y:number,incomCtx:Style){
    this.commitCtxData(incomCtx);
    //--must
    //    this.ctx.textBaseline = "middle";
       this.ctx.textBaseline = "top";
    //    this.ctx.textBaseline = "bottom";
    //    this.ctx.font = "200px sans-serif";
    // x and y are not merged place directly   
    this.ctx.fillText(content,x,y);
}
public drawIcon(code:number,x:number,y:number,incomCtx:Style){
    this.commitCtxData(incomCtx);
    //--must
       this.ctx.textBaseline = "top";
    // x and y are not merged place directly   
    this.ctx.fillText(String.fromCharCode(code),x,y);
}
public drawTextstroke(content:string,x:number,y:number, incomCtx:Style){
    this.commitCtxData(incomCtx);
    //--must
       this.ctx.textBaseline = "top";
    // x and y are not merged   
    this.ctx.strokeText(content, x, y);
}
//very simple function just do not put abstractions here-- keep it simple and pure 
public drawLines(positions :Position[] ,incomCtx:Style ,fill=true){
    this.commitCtxData(incomCtx);
   
    this.ctx.beginPath(); 
    this.ctx.moveTo(positions[0].x,positions[0].y);

    for (let i = 1; i < positions.length; i++) {
        const pos = positions[i];
        this.ctx.lineTo(pos.x,pos.y);
    }
    //--do not draw the last line
    this.ctx.closePath(); //importantay
        if (fill == true){
            this.ctx.fill();
        }else {
            this.ctx.stroke();
        }
}
// x and y are not here
private commitCtxData(incomCtx:Style){
    
    if (incomCtx.lineCap !== null){
        this.ctx.lineCap = "round";
    }
    if (incomCtx.globalAlpha !== null){
        this.ctx.globalAlpha = incomCtx.globalAlpha;
    }
    if (incomCtx.shadowBlur !== null){
        this.ctx.shadowBlur = incomCtx.shadowBlur;
    }
    if (incomCtx.shadowOffsetY !== null){
        this.ctx.shadowOffsetY = incomCtx.shadowOffsetY;
    }
    if (incomCtx.shadowOffsetX !== null){
        this.ctx.shadowOffsetX = incomCtx.shadowOffsetX;
    }
    if (incomCtx.lineWidth !== null){
        this.ctx.lineWidth = incomCtx.lineWidth;
    }
    if (incomCtx.shadowColor !== null){
        this.ctx.shadowColor = incomCtx.shadowColor;
    }
    if (incomCtx.strokeStyle !== null){
        this.ctx.strokeStyle = incomCtx.strokeStyle;
    }
    if (incomCtx.fillStyle !== null){
        this.ctx.fillStyle = incomCtx.fillStyle;
    }
    
    if (incomCtx.lineDashWidth !== null && incomCtx.lineDashGap !== null){
        this.ctx.setLineDash([incomCtx.lineDashWidth,incomCtx.lineDashGap]);
    }
    //---important change
    this.setFont(incomCtx.fontSize,incomCtx.fontName);

}
private setFont(fontSize:number,fontName:string){
// let f = fontSize + "px " + fontName;
let f = `${fontSize}px ${fontName}`;
// let f = `${fontSize}px fantasy`;
// let f = "200px Charcoal";
this.ctx.font = f;
}
public xPerc(perc :number):number{
let checked = this.setBwZeroNhundred(perc);
return (( this.canvas.width /100) * checked); 
}
public yPerc(perc :number):number{
let checked = this.setBwZeroNhundred(perc);    
return ((this.canvas.height /100) * checked); 
}

private setBwZeroNhundred(n:number):number{
  if (n < 0 ){return 0;}  
  if (n > 100 ){return 100;}
  return n;  
}


}