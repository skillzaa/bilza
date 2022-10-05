import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Rect from "./rect.js";
import Pack from "../../pack/pack.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";


export default class RectDb extends CompDb {
   public lineWidth :AniNumberDb;

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",  color :string){

super(startTime,endTime,insertAction);
this.lineWidth = new AniNumberDb(1);
this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Rect(this,pack);
   return comp; 
}
    
}