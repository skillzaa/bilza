import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import FillRect from "./fillRect.js";
import Pack from "../../pack/pack.js";
import Linker from "../../facade/linker.js";


export default class FillRectDb extends CompDb {

constructor(linker :Linker,  color :string){

super(linker);
   this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new FillRect(this,pack);
   return comp; 
}
    
}