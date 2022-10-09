// import IComponent from "../compDb/IComponent.js";
import IComponent from "../compDb/IComponent.js";
import LinesDb from "../components/lines/linesDb.js";
import ILines from "../components/lines/ILines.js";
import starOfDavid from "../lineShapes/starOfDavid.js";
import triangle from "../lineShapes/triangle.js";
import cross from "../lineShapes/cross.js";
import tickRight from "../lineShapes/tickRight.js";
import tickLeft from "../lineShapes/tickLeft.js";
import graphInc from "../lineShapes/graphInc.js";
import rectangle from "../lineShapes/rectangle.js";
import rightTriangle from "../lineShapes/rightTriangle.js";
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

starOfDavid(color:string="black",lineWidth :number):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
starOfDavid(g,lineWidth);
return g;    
}
triangle(color:string="black",lineWidth :number):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
triangle(g,lineWidth);
return g;    
}
cross(color:string="black",lineWidth :number):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
cross(g,lineWidth);
return g;    
}
tickRight(color:string="black",lineWidth :number):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
tickRight(g,lineWidth);
return g;    
}
tickLeft(color:string="black",lineWidth :number):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
tickLeft(g,lineWidth);
return g;    
}
graphInc(color:string="black",lineWidth :number):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
graphInc(g,lineWidth);
return g;    
}
rectangle(color:string="black",lineWidth :number):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
rectangle(g,lineWidth);
return g;    
}
rightTriangle(color:string="black",lineWidth :number):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
rightTriangle(g,lineWidth);
return g;    
}

/////////--------components functions---///////////
    
}