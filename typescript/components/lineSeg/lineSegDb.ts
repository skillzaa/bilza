import CompDb from "../../compDb/compDb.js";
import Vertex from "./vertex.js";
import ISeg from "./ILineSeg.js";
import LineSeg from "./lineSeg.js";
import Pack from "../../pack/pack.js";
import checkZeroToHundred from "../../functions/checkZeroToHundred.js";
import { hsl } from "../../bilza.js";
import Linker from "../../facade/linker.js";
/**
 * Segment drawn a segmented line. This draw all the segments in the   same color, lineWidth etc.
 *  
 */

export default class SegDb extends CompDb implements ISeg {

public  startX :number;
public  startY :number;

public lineWidth :number;
public filled :boolean;
public closed :boolean;
public lineCap :"butt" | "square" | "round";
public lineJoin :"round" | "bevel" | "miter";
public lineDash:[number,number];
//////////////////////////////////////
public data :Vertex[]; 
//----------------------constructor

constructor(linker :Linker,
x :number,
y :number,
hue_0_360:number = 0,
lineWidth :number = 4,
){

super( linker );
            checkZeroToHundred(x);
            checkZeroToHundred(y);
this.startX= x;
this.startY= y;
this.lineWidth = lineWidth,
this.color.set(hsl(hue_0_360));
//--
this.filled = false;
this.closed = false;
this.lineDash = [1,0];
this.lineCap = "round";
this.lineJoin = "miter";
//--
this.data = [];
}



setLineCap(lineCap :"butt" | "square" | "round"){
this.lineCap = lineCap;
}
getLineCap():"butt" | "square" | "round"{
return this.lineCap;
}

setLineJoin(lineJoin : "round" | "bevel" | "miter" = "miter"){
this.lineJoin = lineJoin;     
}
getLineJoin() :"round" | "bevel" | "miter"{
return this.lineJoin;     
}

setLineDash(lineDash :[line :number, dash :number]=[1,0]):void{
this.lineDash = lineDash;
}
getLineDash() :[line :number, dash :number]{
return this.lineDash;
}

setFilled(filled :boolean=true):boolean{
    this.filled = filled;
return this.filled;
}
getFilled():boolean{
return this.filled;
}

setClosed(closed :boolean=true):boolean{
    this.closed = closed;
    return this.closed;
}
getClosed():boolean{
    return this.closed;
}

lineTo(x :number,y  :number):void{
checkZeroToHundred(x);
checkZeroToHundred(y);    
this.data.push({ x: x , y :y, command : "lineTo"});
}
moveTo(x :number,y  :number):void{
checkZeroToHundred(x);
checkZeroToHundred(y);    
this.data.push({ x: x , y :y, command : "moveTo"});
}
fill():void{
this.data.push({ x: 0 , y :0, command : "fill"});
}
getEngineComp(pack :Pack):LineSeg{
const comp = new LineSeg(this,pack);
return comp; 
}

}