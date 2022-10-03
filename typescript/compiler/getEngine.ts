import Engine from "../engine/engine.js";
import EngineDb from "../engine/engineDb.js";
import Pack from "../pack/pack.js";
import CompEngine from "../compEngine/compEngine.js";

export default function getEngine(engineDb :EngineDb , pack :Pack,comps : CompEngine []=[]){

    const engine = new Engine (
        engineDb.canvasId,
        engineDb.canvasWidthPerc,
        comps, // comps 
        null,//background
        5, //duration
        pack//pack
    );
    return engine;

}