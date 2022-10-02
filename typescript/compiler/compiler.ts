import IEngineComp from "../component/IEngineComp.js";
import EngineDb from "../engine/engineDb.js";
import Engine from "../engine/engine.js";
import FillRect from "../components/fillRect/fillRect.js";
import Background from "../components/background/background.js";
import Pack from "../pack/pack.js";
import  IComponent  from "../componentFacade/IComponent.js";
import getEngine from "./getEngine.js"
import getComponentPack from "../componentPack/getComponentPack.js";
import ComponentDb from "../componentFacade/componentDb.js";
import Component from "../component/component.js";


export default class Compiler {
constructor(){

}
// use ComponentDb and not IComponent since that for user

genApp(engineDb :EngineDb,compsDb :IComponent[]):Engine{

const pack = new Pack(engineDb.canvasId,engineDb.canvasWidthPerc); 
const comps :IEngineComp[] = [];
const componentPack = getComponentPack(pack);    

const compDb = compsDb[0];
//@ts-expect-error
const engineComp :Component =  compDb.getEngineComponent(componentPack);
comps.push(engineComp);
console.log("engineComp",engineComp);
const bilza  = getEngine(engineDb,pack,comps); 

return bilza;
}



///////////////////////////////////////////////
}