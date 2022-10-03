import AniColorDb from "../../animationsFacade/AniColorDb.js";
import Background from "./background.js";
import CompDb from "../../compDb/compDb.js";
import CompEngine from "../../compEngine/compEngine.js";
import Pack from "../../pack/pack.js";


export default class BackgroundDb extends CompDb {
public color:AniColorDb;


constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn", color :string="black")
{
super(startTime,endTime,insertAction);
  
this.color = new AniColorDb(color);
}


getEngineComp(pack :Pack):CompEngine{
    const comp = new Background(this,pack,"red");
    return comp; 
 }

 
}