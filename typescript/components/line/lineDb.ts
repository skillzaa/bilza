import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";

import {AniNumberDb,AniPercDb,AniBooleanDb, AniColorDb} from "../../animationsFacade/animationsDb.js";

import Line from "./line.js";
import ILine from "./ILine.js";


export default class LineDb extends CompDb implements ILine {
   public lineWidth :AniNumberDb;
   public x2 :AniNumberDb;
   public y2 :AniNumberDb;

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,  x1 :number , y1 :number , x2 :number ,y2 :number,color:string="black"){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);

this.color.set(color);
this.lineWidth = new AniNumberDb(1);
this.x.set(x1);
this.y.set(y1);

// this.x.setResp(true,this.canvasWidth()); //for-safety
// this.y.setResp(true,this.canvasHeight()); //for-safety

this.x2 = new AniPercDb(x2,this.canvasWidth());
// this.x2.setResp(true,this.canvasWidth());

this.y2 = new AniPercDb(y2 , this.canvasHeight());
// this.y2.setResp(true,this.canvasHeight());

} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Line(this,pack);
   return comp; 
}
/**
 * line comp is drawn differently- so we do not want to change align at all since that will add extra addition/sub in calc.
 * in the rotate align as well we should just change x value and not y
 */

public align(x: number | null=null, y: number | null=null): void {
   //--we do not align line comp so there is no add / sub in the x/y value    
       super.align(0,0);
   }
   public alignRotate(x: 0|1|2|null, y: number | null=0): void {
       super.alignRotate(x,0);
}




}