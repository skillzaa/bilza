import CompDB from "../baseCompDB/baseCompDb.js";



export default class FillRectDb extends CompDB {

constructor(startTime :number,
endTime :number,canvasWidth :number,canvasHeight :number,insertAction :"add"|"append" | "alwaysOn"){

super(startTime,endTime,canvasWidth,canvasHeight,insertAction);
this.compType = "fillRect";
}


    
}