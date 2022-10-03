import Pack from "../pack/pack.js";

import Engine from "../engine/engine.js";
import EngineDb from "../engine/engineDb.js";
import getEngine from "./getEngine.js"
///////////////////////////////////////////////////
import ICompDb from "../compDb/ICorePropsDb.js";
import ICompEngine from "../compEngine/ICompEngine.js";
///////////////////////////////////////////////////
import getEngineComp from "../compCompiler/getEngineComp.js";

export default class Compiler {
constructor(){

}

genApp(engineDb :EngineDb,compsDb :ICompDb[]):Engine{

const pack = new Pack(engineDb.canvasId,engineDb.canvasWidthPerc); 
const comps :ICompEngine[] = [];

///--get comps loop
for (let i = 0; i < compsDb.length; i++) {
    const compDb = compsDb[i];
    const engineComp = getEngineComp(compDb,pack);
    comps.push(engineComp);
}
// console.log("engineComp",engineComp);
const bilza  = getEngine(engineDb,pack,comps); 

return bilza;
}



///////////////////////////////////////////////
}