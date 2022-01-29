
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
// @ts-expect-error    
this.ctx = this.canvas.getContext('2d');
this.fillStyle = "#1e1eea";
this.strokeStyle = "#1e1eea";
this.fontSize = 100;
this.fontName = "serif";
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
// public setFontSize(n:number){
//     this.fontSize = n;
// }
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
    // let f = this.fontSize + "px " + this.fontName;
    // this.ctx.font = f;

    this.ctx.beginPath();
    this.ctx.moveTo(startX,startY);
    this.ctx.lineTo(endX,endY);
    this.ctx.stroke();
}
public drawText(content:string,x:number,y:number){
// let f = this.fontSize + "px " + this.fontName;
// this.ctx.font = f;

    //--must
    this.ctx.textBaseline = "top";
    this.ctx.fillText(content, x, y);
}

}