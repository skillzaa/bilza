import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import FillRect from "./fillRect.js";
import Pack from "../../pack/pack.js";
// import corePropsToEngineComp from "../../compCompiler/corePropsToEngineComp.js";


export default class FillRectDb extends CompDb {

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn"){

super(startTime,endTime,insertAction);
}

getEngineCom(pack :Pack):compEngine{
   const comp = new FillRect(this,pack,"red");
   return comp; 
}
    
}