import Component from "../../component/component.js";
import ComponentDb from "../../componentFacade/componentDb.js";
import ComponentPack from "../../componentPack/componentPack.js";
import FillRect from "./fillRect.js";



export default class FillRectDb extends ComponentDb {

constructor(startTime :number,
endTime :number,canvasWidth :number,canvasHeight :number,insertAction :"add"|"append" | "alwaysOn"){

super(startTime,endTime,canvasWidth,canvasHeight,insertAction);
}

getEngineComponent(componentPack :ComponentPack):Component{

   const comp = new FillRect(componentPack,"red");
   return comp; 
}
    
}