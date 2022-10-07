import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import checkZeroToHundred from "../../functions/checkZeroToHundred.js";
import {AniNumberDb,AniBooleanDb, AniColorDb} from "../../animationsFacade/animationsDb.js";

import Arc from "./curve.js";
import IArc from "./ICurve.js";

export default class ArcDb extends CompDb implements IArc {

   startX            : AniNumberDb;
   startY            : AniNumberDb;
   midX              : AniNumberDb;
   midY              : AniNumberDb;
   endX              : AniNumberDb;
   endY              : AniNumberDb;
   lineWidth         : AniNumberDb;
   bracketWidth      : AniNumberDb;
   colorBracket      : AniColorDb;

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,  startX :number ,startY :number,midX :number,midY :number,endX :number,endY :number, color:string="black"){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);

checkZeroToHundred(startX);
checkZeroToHundred(startY);
checkZeroToHundred(midX);
checkZeroToHundred(midY);
checkZeroToHundred(endX);
checkZeroToHundred(endY);
// this.y.set(0);

this.startX      = new AniNumberDb(startX);
this.startY      = new AniNumberDb(startY);
this.midX        = new AniNumberDb(midX);
this.midY        = new AniNumberDb(midY);
this.endX        = new AniNumberDb(endX);
this.endY        = new AniNumberDb(endY);
this.lineWidth   = new AniNumberDb(1);
this.bracketWidth   = new AniNumberDb(2);
this.colorBracket   = new AniColorDb("yellow");

///////////////////////////////////
this.color.set(color);
this.lineWidth = new AniNumberDb(1);
this.width.set(30);
this.height.set(50);

} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Arc(this,pack);
   return comp; 
}

leftMost():AniNumberDb{
const smaller =  (this.startX.value() < this.midX.value()) 
? this.startX : this.midX; 

const left =  (smaller.value() < this.endX.value()) 
? smaller : this.endX; 
return left;
}
rightMost():AniNumberDb{
const larger =  (this.startX.value() > this.midX.value()) 
? this.startX : this.midX; 

const large =  (larger.value() > this.endX.value()) 
? larger : this.endX; 
return large;
}
topMost():AniNumberDb{ //top most is the smaller bot is largest
const topper =  (this.startY.value() < this.midY.value()) 
? this.startY : this.midY; 

const top =  (topper.value() < this.endY.value()) 
? topper : this.endY; 
return top;
}
bottomMost():AniNumberDb{ //larger one 
const topper =  (this.startY.value() > this.midY.value()) 
? this.startY : this.midY; 

const top =  (topper.value() > this.endY.value()) 
? topper : this.endY; 
return top;
}


/////////////////////////////

}