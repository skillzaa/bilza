import IEngineComp from "../component/IEngineComp.js";
import EngineDb from "../db/engineDb.js";
import Engine from "../engine/engine.js";
import FillRect from "../components/fillRect.js";
import Background from "../components/background.js";
import Pack from "../pack/pack.js";



export default class Compiler {
constructor(){

}

genApp(engineDb :EngineDb):Engine{
const comps:IEngineComp[] = this.getComps();    
const bilza :Engine  = this.getEngine(engineDb,comps); 
return bilza;
}
getComps():IEngineComp[]{
const comps :IEngineComp[] = [];
const fillRect = new FillRect("red");
fillRect.alwaysOn = true;
// const bg = this.getBackground("grey");
// bg.alwaysOn = true;
// comps.push(bg);
comps.push(fillRect);
return comps;
}
getBackground(color :string="grey"):Background{
const bg = new Background(color);
return bg;
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