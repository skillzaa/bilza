import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import ILinesSubComp from "./ILinesSubComp.js";


import Lines from "./lines.js";

import ILine from "./ILines.js";
import LineStruct from "./lineStruct.js";
import Seg from "./seg.js";


/////////////////////////////////////////////////////
export default class LinesDb extends CompDb implements ILine {
data :ILinesSubComp [];

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,color :string="black"){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);
this.data = [];
this.width.set(30);
this.height.set(30);

this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Lines(this,pack);
   return comp; 
}
//--this is add line method not the seg.add
public add(x1 :number,y1 :number,x2 :number,y2 :number,
   lineWidth :number = 4,lineCap :0|1|2,lineJoin :0|1|2=0, lineDash:[number,number] = [1,0]){

const line = new LineStruct(x1,y1,x2,y2,this.color.value(),lineWidth,lineCap,lineJoin,lineDash);

// this.data.push(line);
}

public seg( 
   x :number,
   y :number,
   //////////////////////////
   color:string=     this.color.value(),
   filled:boolean=true, 
   lineWidth :number = 4,
   lineCap :0|1|2 = 0,
   lineJoin :0|1|2 = 0,
   lineDash:[number,number] = [1,0] //8 args
   ):Seg{

const sg = new Seg(
x,
y ,
//////////////////////////
color,
filled, 
lineWidth ,
lineCap ,
lineJoin,
lineDash //8 args
);

this.data.push(sg);

return sg;
}
/////////////////////////////

}