import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import checkZeroToHundred from "../../functions/checkZeroToHundred.js";
import {AniNumberDb,AniBooleanDb,AniPercDb, AniColorDb} from "../../animationsFacade/animationsDb.js";
import toPix from "../../functions/toPix.js";


import Line from "./lines.js";
import ILine from "./ILines.js";
import LineStruct from "./lineStruct.js";

export default class LinesDb extends CompDb implements ILine {
data :LineStruct[];

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);
this.data = [];
this.width.set(30); ///its ok to set core props in DB contructor but not in compEngine constructor
this.height.set(30);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Line(this,pack);
   return comp; 
}
public add(x1 :number,y1 :number,x2 :number,y2 :number,
   color :string="black",lineWidth :number = 1,opacity :number=100,lineCap :0|1|2,lineJoin :0|1|2=0,
   lineDash:[number,number] = [1,0]){
const line = new LineStruct(x1,y1,x2,y2,color,lineWidth,opacity,lineCap,lineJoin,lineDash);
this.data.push(line);
}

/////////////////////////////

}