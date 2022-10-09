// import IComponent from "../compDb/IComponent.js";
import IComponent from "../compDb/IComponent.js";
import LinesDb from "../components/lines/linesDb.js";
import ILines from "../components/lines/ILines.js";
import starOfDavid from "../lineShapes/startOfDavid.js";
import triangle from "../lineShapes/triangle.js";
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

starOfDavid(color:string="black"):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
starOfDavid(g);
return g;    
}
triangle(color:string="black"):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
triangle(g);
return g;    
}

/////////--------components functions---///////////
    
}