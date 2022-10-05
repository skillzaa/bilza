import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import {AniNumberDb,AniBooleanDb, AniColorDb} from "../../animationsFacade/animationsDb.js";
import ICircle from "./ICircle.js";
import Circle from "./circle.js";


export default class CircleDb extends CompDb implements ICircle {
   public startAngle :AniNumberDb;
   public endAngle :AniNumberDb;
   public filled :AniBooleanDb;
   public lineWidth :AniNumberDb; 
   public strokeColor :AniColorDb; 
   public strokeWidth :AniNumberDb; 
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   
constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,radius :number,  color :string){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);

this.lineWidth = new AniNumberDb(1);
this.startAngle = new AniNumberDb(0);
this.endAngle = new AniNumberDb(360);
this.filled = new AniBooleanDb(false);
this.strokeColor = new  AniColorDb(color);
this.strokeWidth = new AniNumberDb(1);

this.color.set(color);
this.width.set(Math.floor(radius * 2));

//--special for circle
this.height.setResp(true,this.canvasWidth);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Circle(this,pack);
   return comp; 
}
    
}