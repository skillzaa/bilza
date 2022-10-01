import Engine from "../engine/engine.js";
import EngineDb from "../db/engineDb.js";



export default function getEngine(engineDb :EngineDb){

    const engine = new Engine (
        engineDb.canvasId,
        engineDb.canvasWidthPerc,
        null, // comps 
        null,//background
        5, //duration
        pack//pack
    );
    return engine;




}