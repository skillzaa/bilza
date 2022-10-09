// import IComponent from "../compDb/IComponent.js";
import IComponent from "../compDb/IComponent.js";
import FillRectDB from "../components/fillRect/fillRectDb.js";
import RectDB from "../components/rect/rectDb.js";
import IRect from "../components/rect/IRect.js";
import CanvasBorderDb from "../components/canvasBorder/canvasBorderDb.js";
import ICanvasBorder from "../components/canvasBorder/ICanvasBorder.js";
import GridDb from "../components/grid/gridDb.js";
import IGrid from "../components/grid/IGrid.js";
import CircleDb from "../components/circle/circleDb.js";
import MarkerDb from "../components/circle/markerDb.js";
import ICircle from "../components/circle/ICircle.js";
import PicDb from "../components/pic/picDb.js";
import IPic from "../components/pic/IPic.js";
import LineDb from "../components/line/lineDb.js";
import ILine from "../components/line/ILine.js";
import LinesDb from "../components/lines/linesDb.js";
import ILines from "../components/lines/ILines.js";
import ArrowDb from "../components/arrow/arrowDb.js";
import IArrow from "../components/arrow/IArrow.js";
import IParticleSystem from "../components/particleSystem/IParticleSystem.js";
import ParticleSystemDB from "../components/particleSystem/particleSystemDb.js";
import IText from "../components/text/IText.js";
import TextDB from "../components/text/textDb.js";
// import IArc from "../components/arc/IArc.js";
// import ArcDb from "../components/arc/arcDb.js";
import ICurve from "../components/curve/ICurve.js";
import CurveDb from "../components/curve/curveDb.js";
import starOfDavid from "../lineShapes/starOfDavid.js";
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
private charsWidth : (chars:string,fontSize:number,fontName:string)=> number;

////////////////////////////////////////////////////
constructor(startTime :number,endTime :number,comps :IComponent[],insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,charsWidth : (chars:string,fontSize:number,fontName:string)=> number ){

this.comps = comps;
this.startTime = startTime;
this.endTime = endTime;
this.insertAction = insertAction;
this.canvasWidth = canvasWidth;
this.canvasHeight = canvasHeight;
this.charsWidth = charsWidth;
}



///////////////////////////////////////////////
// arc(startX :number ,startY :number,midX :number,midY :number,endX :number,endY :number, color:string="black"):IArc{

// let g = new ArcDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight, startX,startY,midX,midY,endX,endY, color);
// this.comps.push(g);
// return g;    
// }
curve(startX :number ,startY :number,midX :number,midY :number,endX :number,endY :number, color:string="black"):ICurve{

let g = new CurveDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight, startX,startY,midX,midY,endX,endY, color);
this.comps.push(g);
return g;    
}
arrow(x1 :number, y1 :number, x2 :number, y2 :number,color :string="black"):IArrow{
let g = new ArrowDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight, x1, y1, x2, y2,color);
this.comps.push(g);
return g;    
}
canvasBorder(color :string="grey",width :number=0.25):ICanvasBorder{
let g = new CanvasBorderDb (
    this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color,width
    );
this.comps.push(g);
return g;    
}
fillRect(color :string="#000000"):IComponent{
let g = new FillRectDB(this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
return g;    
}

particleSystem(count :number= 20,color :string="#008000",delay :number=50):IParticleSystem{

let g = new ParticleSystemDB(this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,count,color,delay);

this.comps.push(g);
return g;    
}
rect(color :string="#000000"):IRect{
let g = new RectDB(this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
return g;    
}
text(content :string,color :string="#000000"):IText{
let g = new TextDB(this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,this.charsWidth,content,color);
this.comps.push(g);
return g;    
}

grid(color :string="grey",cellWidth :number=10,cellHeight :number=10):IGrid{
let g = new GridDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color,cellWidth,cellHeight);
this.comps.push(g);
return g;    
}
circle(radius :number=5,color :string="black"):ICircle{
let g = new CircleDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,radius,color);
this.comps.push(g);
return g;    
}
marker(x :number,y :number, color :string="red",radius :number= 1):ICircle{
let g = new MarkerDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,x,y,color,radius);
this.comps.push(g);
return g;    
}

line( x1 :number , y1 :number , x2 :number ,y2 :number,color:string="black"):ILine{
let g = new LineDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,x1,y1,x2,y2,color);
this.comps.push(g);
return g;    
}
lines(color:string="black"):ILines{
let g = new LinesDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
return g;    
}

pic(imgUrl :string,width :number=25,height:number=25):IPic{
let g = new PicDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,imgUrl,width,height);
this.comps.push(g);
return g;    
}

/////////--------components functions---///////////
    
}