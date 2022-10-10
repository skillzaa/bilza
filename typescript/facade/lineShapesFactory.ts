import { hsl } from "../bilza.js";
import IComponent from "../compDb/IComponent.js";

import ILineSeg from "../components/lineSeg/ILineSeg.js";
import LineSegDb from "../components/lineSeg/lineSegDb.js";

import starOfDavid from "../lineShapes/starOfDavid.js";
// import triangle from "../lineShapes/triangle.js";
// import cross from "../lineShapes/cross.js";
// import tickRight from "../lineShapes/tickRight.js";
// import tickLeft from "../lineShapes/tickLeft.js";
// import graphInc from "../lineShapes/graphInc.js";
import rectangle from "../lineShapes/rectangle.js";
// import rightTriangle from "../lineShapes/rightTriangle.js";
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

// triangle(hue_0_360 : number = 240,filled :boolean=true,lineWidth :number = 4):ILines{
// let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,hsl(hue_0_360));
// this.comps.push(g);
// triangle(g,hue_0_360,filled,lineWidth);
// return g;    
// }
// cross(hue_0_360 : number = 240,filled :boolean=true,lineWidth :number = 4):ILines{
// let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,hsl(hue_0_360));
// this.comps.push(g);
// cross(g,hue_0_360,filled,lineWidth);
// return g;    
// }
// tickRight(hue_0_360 : number = 240,filled :boolean=true,lineWidth :number = 4):ILines{
// let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,hsl(hue_0_360));
// this.comps.push(g);
// tickRight(g,hue_0_360,filled,lineWidth);
// return g;    
// }
// tickLeft(hue_0_360 : number = 240,filled :boolean=true,lineWidth :number = 4):ILines{
// let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,hsl(hue_0_360));
// this.comps.push(g);
// tickLeft(g,hue_0_360,filled,lineWidth);
// return g;    
// }
// graphInc(hue_0_360 : number = 240,filled :boolean=true,lineWidth :number = 4):ILines{
// let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,hsl(hue_0_360));
// this.comps.push(g);
// graphInc(g,hue_0_360,filled,lineWidth);
// return g;    
// }
rectangle(hue_0_360:number =0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
//--we only need filled and color from THE USER OF ASSET
rectangle(g,filled);
return g;    
}
starOfDavid(hue_0_360:number =0,filled:boolean=false,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,0, 0, hue_0_360,lineWidth);
this.comps.push(g);
//--we only need filled and color from THE USER OF ASSET
starOfDavid(g,filled);
return g;    
}
// rightTriangle(hue_0_360 : number = 240,filled :boolean=true,lineWidth :number = 4):ILines{
// let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,hsl(hue_0_360));
// this.comps.push(g);
// rightTriangle(g,hue_0_360,filled,lineWidth);
// return g;    
// }

//////////////////////////////////////////    
}