import ICompDb from "../compDb/ICompDb";
import Pack from "../pack/pack";
import corePropsToEngineComp from "./corePropsToEngineComp";


export default function getEngineComp(compDb :ICompDb,pack :Pack){
//@ts-expect-error
    const compEngine = compDb.getEngineComp();
    corePropsToEngineComp(compDb,compEngine,pack);
    // startTime :number;    
    // endTime :number;    
//--The compDb may already have canvas width/height and charsWidth but that reference of pack may not be valid now so refresh them.

    // canvasWidth :number;    
    // canvasHeight :number;
    // charsWidth :(chars:string,fontSize:number,fontName:string)=>number;

    // const componentPack = getComponentPack(pack);    

    // componentPack.init(compDb);
    // //@ts-expect-error 
    //     const engineComp :Component =  compDb.getEngineComponent(componentPack);




///////////////////////////////////////////////////////////////
}