import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import {AniNumberDb,AniBooleanDb, AniColorDb} from "../../animations/animations.js";
import ICircle from "./ICircle.js";
import Circle from "./circle.js";
import Linker from "../../facade/linker.js";

export default class CircleDb extends CompDb implements ICircle {
   public startAngle :AniNumberDb;
   public endAngle :AniNumberDb;
   public filled :AniBooleanDb;
   public lineWidth :AniNumberDb; 
   public strokeColor :AniColorDb; 
   public strokeWidth :AniNumberDb; 
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   
constructor(linker :Linker,radius :number,  color :string){

super( linker );
 
this.lineWidth = new AniNumberDb(1);
this.startAngle = new AniNumberDb(0);
this.endAngle = new AniNumberDb(360);
this.filled = new AniBooleanDb(false);
this.strokeColor = new  AniColorDb(color);
this.strokeWidth = new AniNumberDb(1);

this.color.set(color);
this.width.set(Math.floor(radius * 2));

} 

contentHeight(): number {
   // const ht  = (this.width.value() / this.canvasHeight()) * 100;
   return this.width.value();
}
//--This may be Pix (if prop is non-responsive) or may be percentage (if prop is responsive)
// contentHeightRaw(): number {
//    return this.width.valueRaw();
// }
   
getEngineComp(pack :Pack):compEngine{
   const comp = new Circle(this,pack);
   return comp; 
}
    
}