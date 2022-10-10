import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import checkZeroToHundred from "../../functions/checkZeroToHundred.js";
import {AniNumberDb,AniBooleanDb,AniPercDb, AniColorDb} from "../../animations/animations.js";
import toPix from "../../functions/toPix.js";


import Arc from "./curve.js";
import IArc from "./ICurve.js";

export default class CurveDb extends CompDb implements IArc {

   startX            : AniNumberDb;
   startY            : AniNumberDb;
   midX              : AniNumberDb;
   midY              : AniNumberDb;
   endX              : AniNumberDb;
   endY              : AniNumberDb;
   lineWidth         : AniNumberDb;
   bracketWidth      : AniNumberDb;
   showBracket       : AniBooleanDb;
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
this.midY        = new AniNumberDb(midY );
this.endX        = new AniNumberDb(endX );
this.endY        = new AniNumberDb(endY );
this.lineWidth   = new AniNumberDb(1);
this.bracketWidth   = new AniNumberDb(2);
this.colorBracket   = new AniColorDb("yellow");
this.showBracket = new AniBooleanDb(true);

///////////////////////////////////
this.color.set(color);
this.lineWidth = new AniNumberDb(1);
this.width.set(30); ///its ok to set core props in DB contructor but not in compEngine constructor
this.height.set(30);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Arc(this,pack);
   return comp; 
}
/////////////////////////////

}