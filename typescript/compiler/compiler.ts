import IEngineComp from "../compEngine/ICompEngine.js";
import EngineDb from "../engine/engineDb.js";
import Engine from "../engine/engine.js";
import FillRect from "../components/fillRect/fillRect.js";
import Background from "../components/background/background.js";
import Pack from "../pack/pack.js";
import  IComponent  from "../compDb/ICompDb.js";
import getEngine from "./getEngine.js"
import getComponentPack from "../componentPack/getComponentPack.js";
import ComponentDb from "../compDb/compDb.js";
import Component from "../compEngine/compEngine.js";


export default class Compiler {
constructor(){

}
// use ComponentDb and not IComponent since that for user

genApp(engineDb :EngineDb,compsDb :Component[]):Engine{

const pack = new Pack(engineDb.canvasId,engineDb.canvasWidthPerc); 
const comps :IEngineComp[] = [];

///--get comps loop
for (let i = 0; i < compsDb.length; i++) {
    const compDb = compsDb[i];
    
    comps.push(engineComp);
}
// console.log("engineComp",engineComp);
const bilza  = getEngine(engineDb,pack,comps); 

return bilza;
}



///////////////////////////////////////////////
}