import Pack from "../../pack/pack.js";
import Style from "../../pack/style.js";
import ILinesSubComp from "./ILinesSubComp.js";


export default class LinePrimtive implements ILinesSubComp{

x1 :number;    
y1 :number;    
x2 :number;    
y2 :number;    
color :string | null;    
lineWidth :number;    
// opacity :number;    
lineCap  :0 | 1 | 2;    
lineJoin :0 | 1 | 2;    
lineDash :[line:number, gap:number];
//.....
style :Style;
//.....
constructor(
    x1 :number,y1 :number,x2 :number,y2 :number,
    color :string | null = null,
    lineWidth :number = 3,
    lineCap :0|1|2,
    lineJoin :0|1|2 = 0,
    lineDash:[number,number] = [1,0]
    ){
this.x1 = x1;
this.y1 = y1;
this.x2 = x2;
this.y2 = y2;
this.color = color;
this.lineWidth = lineWidth;
this.lineCap = lineCap;
this.lineJoin = lineJoin;
this.lineDash = lineDash;
//..
this.style = new Style();
}


draw(p :Pack,compX :number, compY :number, compWidth :number,compHeight :number,compColor :string):void{
const wdFactor = compWidth/100;    
const htFactor = compHeight/100;  
//------------------------------------------
if (this.color == null){
    this.style.fillStyle = compColor;
    this.style.strokeStyle = compColor;
}else{
    this.style.fillStyle = this.color;
    this.style.strokeStyle = this.color;
}

p.beginPath();
p.moveTo(
    compX + (wdFactor *  this.x1),
    compY + (htFactor *  this.y1)
    );
    
p.lineTo(
    compX + (wdFactor *  this.x2),
    compY + (htFactor *  this.y2),
    this.style);

    p.stroke();
    p.closePath();

return;
}


}