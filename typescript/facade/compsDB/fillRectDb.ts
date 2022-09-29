import CompDB from "../compDB/compDb.js";



export default class FillRectDb extends CompDB {

constructor(startTime :number,
endTime :number,canvasWidth :number,canvasHeight :number,insertAction :"add"|"append"){

super(startTime,endTime,canvasWidth,canvasHeight,insertAction);

}


    
}