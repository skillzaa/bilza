import IEngineComp from "../component/IEngineComp.js";
import ComponentDb from "../componentFacade/componentDb.js";
import corePropsToEngineComp from "./corePropsToEngineComp.js";
import ComponentPack from "../componentPack/componentPack.js";


export default function CompCompiler(compDb :ComponentDb,componentPack :ComponentPack){

    const engineComp = compDb.getEngineComp(componentPack);


    // corePropsToEngineComp(compDb,engineComp);







///////////////////    
}