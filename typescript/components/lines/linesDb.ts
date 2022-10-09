import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import checkZeroToHundred from "../../functions/checkZeroToHundred.js";
import {AniNumberDb,AniBooleanDb,AniPercDb, AniColorDb} from "../../animationsFacade/animationsDb.js";


import LinePrim from "../../primtivecomps/line/linePrim.js";
import IPrimtive from "../../primtivecomps/IPrimtive.js";
import Lines from "./lines.js";

import ILine from "./ILines.js";
// import LineStruct from "./lineStruct.js";
import Seg from "./seg.js";



export default class LinesDb extends CompDb implements ILine {
data :IPrimtive[];

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,color :string="black"){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);
this.data = [];
this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Lines(this,pack);
   return comp; 
}
//--this is add line method not the seg.add
public add(x1 :number,y1 :number,x2 :number,y2 :number,
   lineWidth :number = 4,lineCap :0|1|2,lineJoin :0|1|2=0, lineDash:[number,number] = [1,0]){

const line = new LinePrim(x1,y1,x2,y2,this.color.value(),lineWidth,lineCap,lineJoin,lineDash);

this.data.push(line);
}

public seg( x :number,y :number, 
   lineWidth :number = 4,
   lineCap :0|1|2 = 0,
   lineJoin :0|1|2 = 0,
   lineDash:[number,number] = [1,0] ):Seg{

const sg = new Seg(this.data,x,y,this.color.value(),lineWidth,lineCap,
lineJoin, lineDash);
return sg;
}
/////////////////////////////

}