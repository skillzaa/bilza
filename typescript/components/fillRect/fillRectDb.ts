import Component from "../../compEngine/compEngine.js";
import ComponentDb from "../../compDb/compDb.js";
import FillRect from "./fillRect.js";
import ComponentPack from "../../componentPack/componentPack.js";
import corePropsToEngineComp from "../../compCompiler/corePropsToEngineComp.js";


export default class FillRectDb extends ComponentDb {

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn"){

super(startTime,endTime,insertAction);
}

getEngineCom():Component{
   const comp = new FillRect("red");
   return comp; 
}
    
}