import AniColorDb from "../../animationsFacade/AniColorDb.js";
import Background from "./background.js";
import ComponentPack from "../../componentPack/componentPack.js";
import corePropsToEngineComp from "../../compCompiler/corePropsToEngineComp.js";
import ComponentDb from "../../compDb/compDb.js";
import EngineComponent from "../../compEngine/compEngine.js";
 


export default class BackgroundDb extends ComponentDb {
public color:AniColorDb;


constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn", color :string="black")
{
super(startTime,endTime,insertAction);
  
this.color = new AniColorDb(color);
}

getEngineComponent(componentPack :ComponentPack):EngineComponent{

    const comp = new Background(componentPack,"red");
    corePropsToEngineComp(this,comp);
    return comp; 
 }
 
}