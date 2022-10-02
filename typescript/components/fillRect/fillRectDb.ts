import ComponentDb from "../../componentFacade/componentDb.js";



export default class FillRectDb extends ComponentDb {

constructor(startTime :number,
endTime :number,canvasWidth :number,canvasHeight :number,insertAction :"add"|"append" | "alwaysOn"){

super(startTime,endTime,canvasWidth,canvasHeight,insertAction);
this.compType = "fillRect";
}


    
}