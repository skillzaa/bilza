import IEngineComp from "../component/IEngineComp.js";
import EngineDb from "../db/engineDb.js";
import Engine from "../engine/engine.js";
import EnginePack from "./enginePack.js";
import FillRect from "../components/fillRect.js";
import Background from "../components/background.js";
import Pack from "../pack/pack.js";
import  IComponent  from "../facade/IComponent.js";



export default class Compiler {
constructor(){

}
getEnginePack(){
const ep = new EnginePack()
}
genApp(engineDb :EngineDb,compsDb :IComponent[]):Engine{
const pack = new Pack(engineDb.canvasId,engineDb.canvasWidthPerc);     
// const engine  = this.getEngine(engineDb,comps); 
const comps:IEngineComp[] = getComps(compsDb);    
return bilza;
}



///////////////////////////////////////////////
}