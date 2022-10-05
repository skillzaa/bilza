// import IComponent from "../compDb/IComponent.js";
import FillRectDB from "../components/fillRect/fillRectDb.js";
import RectDB from "../components/rect/rectDb.js";
import IComponent from "../compDb/IComponent.js";
import IRect from "../components/rect/Irect.js";
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

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
let g = new FillRectDB(this.startTime,this.endTime,this.insertAction,color);
this.comps.push(g);
return g;    
}
rect(color :string="#000000"):IRect{
let g = new RectDB(this.startTime,this.endTime,this.insertAction,color);
this.comps.push(g);
return g;    
}
/////////--------components functions---///////////
    
}