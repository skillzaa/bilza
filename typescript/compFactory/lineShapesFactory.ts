import { hsl } from "../bilza.js";
import IComponent from "../compDb/IComponent.js";

import ILineSeg from "../components/lineSeg/ILineSeg.js";
import LineSegDb from "../components/lineSeg/lineSegDb.js";

import starOfDavid from "../lineShapes/starOfDavid.js";
import triangle from "../lineShapes/triangle.js";
import cross from "../lineShapes/cross.js";
import tickRight from "../lineShapes/tickRight.js";
import tickLeft from "../lineShapes/tickLeft.js";
import graphInc from "../lineShapes/graphInc.js";
import rectangle from "../lineShapes/rectangle.js";
import exclamationMark from "../lineShapes/exclamationMark.js";
import rightTriangle from "../lineShapes/rightTriangle.js";
import questionMark from "../lineShapes/questionMark.js";
import arrow from "../lineShapes/arrow.js";
import home from "../lineShapes/home.js";
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


triangle(hue_0_360:number =0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
triangle(g,filled);
return g;    
}
questionMark(hue_0_360:number =0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
questionMark(g,filled);
return g;    
} 
arrow(hue_0_360:number =0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
arrow(g,filled);
return g;    
}
home(hue_0_360:number =0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
home(g,filled);
return g;    
}
exclamationMark(hue_0_360:number =0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
exclamationMark(g,filled);
return g;    
}
rectangle(hue_0_360:number =0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
rectangle(g,filled);
return g;    
}

rightTriangle(hue_0_360:number = 0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
rightTriangle(g, filled );
return g;    
}
tickLeft(hue_0_360:number = 0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
tickLeft(g, filled );
return g;    
}
tickRight(hue_0_360:number = 0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
tickRight(g, filled );
return g;    
}
graphInc(hue_0_360:number = 0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
graphInc(g, filled );
return g;    
}
cross(hue_0_360:number = 0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
//--we only need filled and color from THE USER OF ASSET
cross(g,false);
return g;    
}
starOfDavid(hue_0_360:number =0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
//--we only need filled and color from THE USER OF ASSET
starOfDavid(g,filled);
return g;    
}

//////////////////////////////////////////    
}