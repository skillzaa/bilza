import FillRectDB from "../db/compsDB/fillRectDb.js";
import IComponent from "./IComponent.js";

export default class CompFactory {
private readonly startTime :number;
private readonly endTime :number;
private readonly canvasWidth :number;
private readonly canvasHeight :number;
private insertAction :"add"|"append" | "alwaysOn";
private comps :IComponent[];
////////////////////////////////////////////////////
constructor(startTime :number,endTime :number,comps :IComponent[],insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number){

this.comps = comps;
this.startTime = startTime;
this.endTime = endTime;
this.insertAction = insertAction;
this.canvasWidth = canvasWidth;
this.canvasHeight = canvasHeight;
}
fillRect(color :string="#000000"):IComponent{
let g = new FillRectDB(this.startTime,this.endTime,this.canvasWidth,this.canvasHeight,this.insertAction);

this.comps.push(g);

return g;    
}
/////////--------components functions---///////////
    
}