import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import ICanvasBorder from "./ICanvasBorder.js";
import Pack from "../../pack/pack.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
import CanvasBorder from "./canvasBorder.js";

export default class CanvasBorderDb extends CompDb implements ICanvasBorder {
   public borderWidth :AniNumberDb;

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn", color :string="grey",width :number=0.25){

super(startTime,endTime,insertAction);
this.borderWidth = new AniNumberDb(width);
this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new CanvasBorder(this,pack);
   return comp; 
}
    
}