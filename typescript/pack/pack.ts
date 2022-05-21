import Style from "../design/style.js";
import getCanvasElement from "./getCanvasElement.js";
import Position from "../design/Position.js";
import aspectRatioHeight from "../functions/aspectRatioHeight.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";

//--PACK == CANVAS -- ok
export default class Pack {
private canvas :HTMLCanvasElement;
private ctx :CanvasRenderingContext2D;
private canvasId :string;

constructor(canvasId :string,screenWidthInPercent=80){
    
this.canvasId = canvasId;  
//--improve later   
this.canvas = getCanvasElement(this.canvasId);
this.dynamicCanvas(screenWidthInPercent,null);// new
this.ctx  = this.getNewCtx();
    
}//constructor
private getNewCtx():CanvasRenderingContext2D{
    let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    if (ctx == null ){
        throw new Error("could not obtain drawing context");
    }else {
        return ctx;
    }
}
//--- look at this fn again
public drawBackground(color:string="blue"):string{ 
this.ctx.fillStyle = color;
this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
return this.ctx.fillStyle;
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
this.moveTo(start.x,start.y);
this.ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, end.x, end.y);
this.stroke();
}
public restore(){
    this.ctx.restore();
}
public save(){
    this.ctx.save();
}


public drawImage(image :HTMLImageElement,
            x :number, 
            y:number, 
            width:number,
            height :number,
        ){
this.ctx.drawImage(image,x,y,width,height);
}//drawImage ends
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
public moveTo(x :number , y :number){
    this.ctx.moveTo(x,y);
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

public drawCircle(x :number=0, y:number=0, radius:number=25,fill :boolean=false,startAngle=0 , endAngle:number = (2 * Math.PI),incomCtx:Style){
this.commitCtxData(incomCtx);
this.ctx.beginPath();
this.ctx.arc(x, y, radius, startAngle, endAngle, false);
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

public commitCtxData(incomCtx:Style){
    
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
    if (incomCtx.lineDash !== null){
        this.ctx.setLineDash(incomCtx.lineDash);
    }
    
    //---important change
    this.setFont(incomCtx.fontSize,incomCtx.fontFamily);

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
return Math.ceil(( this.canvas.width /100) * checked); 
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
public dynCanvasWidth(widthInPercent :number = 80):number{
    return window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);
}
public dynCanvasHeight(widthInPix :number,heightInPercent :number | null=null):number{

    if (heightInPercent !== null){
        return window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
}else {
    return aspectRatioHeight(widthInPix);
}
}
//--this is old setCanvas
//--TO RESIZE CANVAS TO SOME SPECIFIC PIX WIDTH HEIGHT
resizeCanvas(width :number, height :number | null){
        this.canvas.width = width;
        if (height ==null){
            this.canvas.height = aspectRatioHeight(width);
        } else {
            this.canvas.height = height;
        }
}
dynamicCanvas(widthInPercent:number = 95,heightInPercent :number | null=null):boolean{
    let wd = this.dynCanvasWidth(widthInPercent);
    this.resizeCanvas(wd,this.dynCanvasHeight(wd,heightInPercent));  
    return true;
}    
/////////////////////////////////////////////////////////////
}