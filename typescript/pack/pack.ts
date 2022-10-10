import Style from "./style.js";
import getCanvasElement from "../functions/getCanvasElement.js";
import Position from "./Position.js";
import aspectRatioHeight from "../functions/aspectRatioHeight.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";

//--PACK == CANVAS -- ok
export default class Pack {
private canvas :HTMLCanvasElement;
private ctx :CanvasRenderingContext2D;
private canvasId :string;
public disableOpacity:boolean;


constructor(canvasId :string,screenWidthInPercent=70){
    
this.canvasId = canvasId;  
//--improve later   
this.canvas = getCanvasElement(this.canvasId);
this.dynamicCanvas(screenWidthInPercent,null);// new
this.ctx  = this.getNewCtx();
this.disableOpacity  = false;
    
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
public quadraticCurveTo(startX :number,startY :number,midX :number,midY :number,endX :number,endY :number, style :Style){
    this.commitCtxData(style);
    this.beginPath();
this.moveTo(startX,startY);
this.ctx.quadraticCurveTo(midX, midY, endX, endY);
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
//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
public drawImageSrcDest(image :HTMLImageElement,
            sourceX :number, 
            sourceY:number, 
            sourceWidth:number,
            sourceHeight :number,
            destX :number,
            destY :number,
            destWidth :number,
            destHeight :number
        ){
this.ctx.drawImage(image,sourceX,sourceY,sourceWidth,sourceHeight,
destX, destY, destWidth, destHeight);

}//drawImage ends
public clearCanvas(){
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);    
}

public charsWidth(chars:string,fontSize:number,fontName:string):number{
this.ctx.save();
//--no commitCtxData thus setFont is required
this.setFont(fontSize,fontName);

let m = this.ctx.measureText(chars).width;
this.ctx.restore();
return Math.ceil(m);    
}
// public textWidth(chars:string,incomTempl:Style){
//     this.ctx.save();
//     this.commitCtxData(incomTempl);
// //not required since its done in commitCtxData
//     // this.setFont(incomTempl.fontSize,incomTempl.fontName);
// let m = this.ctx.measureText(chars).width;
// this.ctx.restore();
// return Math.ceil(m);    
// }
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
public arcTo(startX:number,startY:number,endX:number,endY:number,radius :number=20,style :Style){
this.commitCtxData(style);

this.ctx.arcTo(startX,startY,endX,endY,radius);    
}

public drawCircle(x :number=0, y:number=0, radius:number=25,fill :boolean = false, startAngle=0 , endAngle:number = (2 * Math.PI),incomCtx:Style){
    
this.commitCtxData(incomCtx);
this.ctx.beginPath();
this.ctx.arc(x, y, radius, startAngle, endAngle, false);
                if (fill == true){
                    this.ctx.fill();
                }
this.ctx.stroke();
}
public textBaseline(opt :string){
switch (opt) {
    case "top":
    this.ctx.textBaseline = "top";        
        break;
    case "middle":
    this.ctx.textBaseline = "middle";            
        break;
    case "bottom":
    this.ctx.textBaseline = "middle";                
    break;

    case "alphabetic":
    this.ctx.textBaseline = "alphabetic";                
    break;
    
    case "hanging":
    this.ctx.textBaseline = "hanging";                
    break;

    default:
        break;
}
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

private commitCtxData(style:Style){
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //-----shadow variables 4 
    if (style.shadowBlur !== null){
        this.ctx.shadowBlur = style.shadowBlur;
    }
    if (style.shadowOffsetY !== null){
        this.ctx.shadowOffsetY = style.shadowOffsetY;
    }
    if (style.shadowOffsetX !== null){
        this.ctx.shadowOffsetX = style.shadowOffsetX;
    }
    if (style.shadowColor !== null){
        this.ctx.shadowColor = style.shadowColor;
    }
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //-----colors variables 2 --total 6
    if (style.strokeStyle !== null){
        this.ctx.strokeStyle = style.strokeStyle;
    }
    if (style.fillStyle !== null){
        this.ctx.fillStyle = style.fillStyle;
    }
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //-----line variables 4 --total 10
    if (style.lineDash !== null){
        this.ctx.setLineDash(style.lineDash);
    }
    if (style.lineCap !== null){
        this.ctx.lineCap = style.lineCap;
    }
    if (style.lineWidth !== null){
        this.ctx.lineWidth = style.lineWidth;
    }
    if (style.lineJoin !== null){
        this.ctx.lineJoin = style.lineJoin;
    }
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //-----opacity variables 1 --total 11
    if (style.opacity !== null){
        if (this.disableOpacity == true){
            //--full opacity all the time;
            this.ctx.globalAlpha = 1;       
        }else {
            this.ctx.globalAlpha = style.opacity/100;
        }
    }
    //---font 2 varables -total 13
    //---important change
    this.setFont(style.fontSize,style.fontFamily);

}
private setFont(fontSize:number,fontName:string){
let f = `${fontSize}px ${fontName}`;
this.ctx.font = f;
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
measureText(txt :string,style :Style):TextMetrics{
this.ctx.save();
    this.commitCtxData(style);
const metric =  this.ctx.measureText(txt);
this.ctx.restore();    
return metric;
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
rotate(degrees :number,reverse :boolean=false){
    const rad = degrees * (Math.PI/180);
    if (reverse == false){
        this.ctx.rotate(rad);
    }else {
        this.ctx.rotate(-rad);
    }
} 
rotateRad(radians :number,reverse :boolean=false){    
    if (reverse == false){
        this.ctx.rotate(radians);
    }else {
        this.ctx.rotate(-radians);
    }
} 
translate(x :number, y :number){
this.ctx.translate(x,y);    
}
setTransform( a:number=1, b:number=0, c:number=0, d:number=1, e:number=0, f:number=0){
this.ctx.setTransform(a, b, c, d, e, f);    
}
/////////////////////////////////////////////////////////////
}