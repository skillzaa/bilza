import IEngineComp from "../component/IEngineComp.js";
import EngineDb from "../db/engineDb.js";
import Engine from "../engine/engine.js";
import FillRect from "../components/fillRect.js";
import Background from "../components/background.js";
import Pack from "../pack/pack.js";
import  IComponent  from "../facade/IComponent.js";



export default class Compiler {
constructor(){

}

genApp(engineDb :EngineDb,compsDb :IComponent[]):Engine{
const comps:IEngineComp[] = this.getComps(compsDb);    
const bilza :Engine  = this.getEngine(engineDb,comps); 
return bilza;
}
getComps(compsDb :IComponent[]):IEngineComp[]{

const comps :IEngineComp[] = [];

for (let i = 0; i < compsDb.length; i++) {
    const compDb = compsDb[i];
    switch (compDb.compType) {
        case "fillRect":
        const fillRect = new FillRect(0,60,"red");    
        comps.push(fillRect);
            break;
        case "fillRect":
        const background = new Background(0,60);    
        comps.push(background);
            break;
    
        default:
        break;
    }    
}
return comps;
}


getEngine(engineDb :EngineDb,comps :IEngineComp[]):Engine{
// const pack = new Pack(engineDb.canvasId,engineDb.canvasWidthPerc);

const engine = new Engine (
    engineDb.canvasId,
    engineDb.canvasWidthPerc,
    comps
);
return engine;
}



///////////////////////////////////////////////
}