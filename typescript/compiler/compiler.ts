import Pack from "../pack/pack.js";
import Insert from "../insert/insert.js";
import EngineDb from "../engine/engineDb.js";
import Engine from "../engine/engine.js";
///////////////////////////////////////////////////
import CompDb from "../compDb/compDb.js";
import CompEngine from "../compEngine/compEngine.js";
import BackgroundDb from "../components/background/backgroundDb.js";
///////////////////////////////////////////////////

export default class Compiler {
constructor(){

}

genApp(engineDb :EngineDb,compsDb :CompDb[]):Engine{

const pack = new Pack(engineDb.canvasId,engineDb.canvasWidthPerc); 
const comps :CompEngine[] = [];
///////////////////////////////////
// const bg = new BackgroundDb(0,1,"alwaysOn",engineDb.backgroundDb.color.value());
// const bgEngine = bg.getEngineComp(pack); 
// comps.push(bgEngine);
///////////////////////////////////
const insert = new Insert();

///--get comps loop
for (let i = 0; i < compsDb.length; i++) {
    const compDb = compsDb[i];
    const engineComp :CompEngine = compDb.getEngineComp(pack);
            if (engineComp.alwaysOn == false){
                insert.add(engineComp);   
            }
    comps.push(engineComp);
}
// console.log("engineComp",engineComp);
const bilza  = new Engine(engineDb,
    comps,
    comps[0],
    insert.getDuration(),
    pack
    ); 

return bilza;
}



///////////////////////////////////////////////
}