import ICompDb from "../compDb/ICorePropsDb";
import Pack from "../pack/pack";
import corePropsToEngineComp from "./corePropsToEngineComp";
import CompEngine from "../compEngine/compEngine.js";

export default function getEngineComp(compDb :ICompDb,pack :Pack):CompEngine{
//@ts-expect-error
    const compEngine :CompEngine = compDb.getEngineComp();
    corePropsToEngineComp(compDb,compEngine,pack);
    return compEngine;
    
///////////////////////////////////////////////////////////////
}