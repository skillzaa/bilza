
export default class Ctx {
canvas:HTMLCanvasElement;
private ctx: CanvasRenderingContext2D;
private fontName :string;
private fontSize :number;
private fillStyle :string;
private strokeStyle :string;

constructor(){
// @ts-expect-error    
this.canvas = document.getElementById("crown");
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
// @ts-expect-error    
this.ctx = this.canvas.getContext('2d');
this.fillStyle = "#1e1eea";
this.strokeStyle = "#1e1eea";
this.fontSize = 100;
this.fontName = "serif";
}
public canvasWidth():number{
return this.canvas.width;
}
public setStrokeStyle(str:string):string{
this.ctx.strokeStyle = str;
return str;
}
public setFillStyle(str:string):string{
this.ctx.fillStyle = str;
return str;
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
public getFontSize(){
    return this.fontSize;
}
public resetCtx(){
this.ctx.font = this.fontSize + "px " + this.fontName;
}
public setFont(fontSize=this.fontSize,fontName=this.fontName){
this.ctx.font = fontSize + "px " + fontName;
}
public setFontSize(n:number){
    this.fontSize = n;
}
public setFontName(n:string){
    this.fontName = n;
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
public draw_line(startX:number,startY:number,endX:number,endY:number){
    this.ctx.beginPath();
    this.ctx.moveTo(startX,startY);
    this.ctx.lineTo(endX,endY);
    this.ctx.stroke();
}
public drawText(content:string,x:number,y:number){
    //--must
    this.ctx.save();
    this.setFont();
    this.strokeStyle = this.strokeStyle;
    this.fillStyle = this.fillStyle;
    this.ctx.textBaseline = "top";
    this.ctx.fillText(content, x, y);
    this.ctx.restore();
}

}