import AniColorDb from "../../animationsFacade/aniColorDb/AniColorDb.js";
import Background from "./background.js";
import CompDb from "../../compDb/compDb.js";
import CompEngine from "../../compEngine/compEngine.js";
import Pack from "../../pack/pack.js";


export default class BackgroundDb extends CompDb {
public color:AniColorDb;


constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number, color :string="#efeee3")
{
super(startTime,endTime,insertAction,canvasWidth,canvasHeight);
  
this.color = new AniColorDb(color);
}

 
getEngineComp(pack :Pack):CompEngine{
    const comp = new Background(this,pack);
    return comp; 
 }

 
}