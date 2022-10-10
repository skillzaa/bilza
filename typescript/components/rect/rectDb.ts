import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Rect from "./rect.js";
import Pack from "../../pack/pack.js";
import {AniNumberDb} from "../../animations/animations.js";
import IRect from "./IRect.js";


export default class RectDb extends CompDb implements IRect {
   public lineWidth :AniNumberDb;
 
constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,  color :string){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);
this.lineWidth = new AniNumberDb(1);
this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Rect(this,pack);
   return comp; 
}
    
}