import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import ICanvasBorder from "./ICanvasBorder.js";
import Pack from "../../pack/pack.js";
import CanvasBorder from "./canvasBorder.js";
import {AniNumberDb,AniStringDb,AniColorDb,AniBooleanDb} from "../../animations/animations.js";
import Linker from "../../facade/linker.js";


export default class CanvasBorderDb extends CompDb implements ICanvasBorder {
   public borderWidth :AniNumberDb;

constructor(linker :Linker,color :string="grey",width :number=0.25){

super(linker);

this.borderWidth = new AniNumberDb(width);
this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new CanvasBorder(this,pack);
   return comp; 
}
    
}