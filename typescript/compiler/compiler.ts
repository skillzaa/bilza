import Pack from "../pack/pack.js";

import Engine from "../engine/engine.js";
import EngineDb from "../engine/engineDb.js";
import getEngine from "./getEngine.js"
///////////////////////////////////////////////////
import CompDb from "../compDb/compDb.js";
import CompEngine from "../compEngine/compEngine.js";
///////////////////////////////////////////////////

export default class Compiler {
constructor(){

}

genApp(engineDb :EngineDb,compsDb :CompDb[]):Engine{

const pack = new Pack(engineDb.canvasId,engineDb.canvasWidthPerc); 
const comps :CompEngine[] = [];

///--get comps loop
for (let i = 0; i < compsDb.length; i++) {
    const compDb = compsDb[i];
    const engineComp :CompEngine = compDb.getEngineComp(pack);
    comps.push(engineComp);
}
// console.log("engineComp",engineComp);
const bilza  = getEngine(engineDb,pack,comps); 

return bilza;
}



///////////////////////////////////////////////
}