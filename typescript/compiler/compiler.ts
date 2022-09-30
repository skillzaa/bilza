import EngineDb from "../db/engineDb.js";
import Engine from "../engine/engine.js";

export default class Compiler {
constructor(){

}

genEngine(engineDb :EngineDb){
const engine = new Engine (
    engineDb.canvasId,
    engineDb.canvasWidthPerc,
    engineDb.pack,
    engineDb.background
);
return engine;
}



///////////////////////////////////////////////
}