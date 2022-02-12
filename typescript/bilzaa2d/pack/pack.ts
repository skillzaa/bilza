import Style from "../style/style.js";

export default class Pack {
canvas:HTMLCanvasElement;
private ctx: CanvasRenderingContext2D;

constructor(canvasId:string = "bilzaa2d"){
// @ts-expect-error
this.canvas = document.getElementById(canvasId);
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

public charsWidth(chars="",fontSize:number,fontName:string){
this.ctx.save();

this.setFont(fontSize,fontName);

let m = this.ctx.measureText(chars).width;
this.ctx.restore();
return Math.ceil(m);    
}
public textWidth(chars:string,incomTempl:Style){
    
    this.ctx.save();
    this.commitCtxData(incomTempl);

this.setFont(incomTempl.fontSize,incomTempl.fontName);

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
resetCtx(){    
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
       this.ctx.textBaseline = "top";
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
let f = fontSize + "px " + fontName;
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