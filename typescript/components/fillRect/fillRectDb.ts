import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import FillRect from "./fillRect.js";
import Pack from "../../pack/pack.js";


export default class FillRectDb extends CompDb {

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",  color :string){

super(startTime,endTime,insertAction);
   this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new FillRect(this,pack);
   return comp; 
}
    
}