
import LineStruct from "./lineStruct.js";
import Pack from "../../pack/pack.js";
import ILinesSubComp from "./ILinesSubComp.js";

import Style from "../../pack/style.js";


export default class Seg implements ILinesSubComp{    
private readonly startX :number;
private readonly startY :number;
public color :string;
public lineWidth :number;
public filled :boolean;
public lineCap :0|1|2;
public lineJoin :0|1|2;
public lineDash:[number,number];
//////////////////////////////////////
data :LineStruct[]; 
style :Style;

constructor(
x :number,
y :number,
//////////////////////////
color:string="black",
filled:boolean=true, 
lineWidth :number = 4,
lineCap :0|1|2 = 0,
lineJoin :0|1|2 = 0,
lineDash:[number,number] = [1,0] //8 args
) {
this.data = [];

this.startX= x;
this.startY= y;
this.color= color;
this.filled = filled;
this.lineWidth = lineWidth,
this.lineCap = lineCap;
this.lineJoin = lineJoin;
this.lineDash = lineDash;
//---
this.style = new Style();
}

add(x :number,y  :number,
    lineWidth :number = this.lineWidth,
    lineCap :0|1|2 = this.lineCap,
    lineJoin :0|1|2 = this.lineJoin,
    lineDash:[number,number] = this.lineDash
):Seg{

if (this.data.length == 0){
    const l = new LineStruct (this.startX,this.startY,
        x,y, this.color ,lineWidth,lineCap,lineJoin,lineDash);
        this.data.push(l);

}else {

    const l = new LineStruct (
        this.data[this.data.length-1].x2,
        this.data[this.data.length-1].y2,
        x,y,this.color,lineWidth,lineCap,lineJoin,lineDash);

        this.data.push(l);
}
return this;
}

draw(p :Pack,compX :number, compY :number, compWidth :number,compHeight :number):void{
const wdFactor = compWidth/100;    
const htFactor = compHeight/100;  
//------------------------------------------

this.style.fillStyle = "red";
this.style.strokeStyle = "red";

p.moveTo(
    compX + (wdFactor *  this.startX),
    compY + (htFactor *  this.startY)
    );
    
p.beginPath();
for (let i = 0; i < this.data.length; i++) {
    const item = this.data[i];

    p.lineTo(
        compX + (wdFactor *  item.x2),
        compY + (htFactor *  item.y2),
        this.style);
    
    // item.y2
    // this.x.value() + this.resolveX( this.startX.value() ) , 
    // this.y.value() + this.resolveY( this.startY.value() ) ,

}
//@ts-expect-error
p.ctx.fill();
//@ts-expect-error
  p.ctx.stroke();
return;
}


}