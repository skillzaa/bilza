import IEngineComp from "../component/IEngineComp.js";
import EngineDb from "../engine/engineDb.js";
import Engine from "../engine/engine.js";
import FillRect from "../components/fillRect/fillRect.js";
import Background from "../components/background/background.js";
import Pack from "../pack/pack.js";
import  IComponent  from "../componentFacade/IComponent.js";
import getEngine from "./getEngine.js"


export default class Compiler {
constructor(){

}

genApp(engineDb :EngineDb,compsDb :IComponent[]):Engine{
const pack = new Pack(engineDb.canvasId,engineDb.canvasWidthPerc);     
const bilza  = getEngine(engineDb,pack,[]); 
// const comps:IEngineComp[] = getComps(compsDb);    
return bilza;
}



///////////////////////////////////////////////
}