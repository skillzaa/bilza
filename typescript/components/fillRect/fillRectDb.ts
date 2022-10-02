import Component from "../../engineComponent/engineComponent.js";
import ComponentDb from "../../componentFacade/componentDb.js";
import ComponentPack from "../../componentPack/componentPack.js";
import FillRect from "./fillRect.js";
import corePropsToEngineComp from "../../componentFacade/corePropsToEngineComp.js";


export default class FillRectDb extends ComponentDb {

constructor(startTime :number,
endTime :number,canvasWidth :number,canvasHeight :number,insertAction :"add"|"append" | "alwaysOn"){

super(startTime,endTime,canvasWidth,canvasHeight,insertAction);
}

getEngineComponent(componentPack :ComponentPack):Component{

   const comp = new FillRect(componentPack,"red");
   corePropsToEngineComp(this,comp);
   return comp; 
}
    
}