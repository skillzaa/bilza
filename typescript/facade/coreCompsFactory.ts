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
import ICircle from "../components/circle/ICircle.js";

import MarkerDb from "../components/circle/markerDb.js";

import PicDb from "../components/pic/picDb.js";
import IPic from "../components/pic/IPic.js";

import LineDb from "../components/line/lineDb.js";
import ILine from "../components/line/ILine.js";

// import LinesDb from "../components/lines/linesDb.js";
// import ILines from "../components/lines/ILines.js";

import ArrowDb from "../components/arrow/arrowDb.js";
import IArrow from "../components/arrow/IArrow.js";

import IParticleSystem from "../components/particleSystem/IParticleSystem.js";
import ParticleSystemDB from "../components/particleSystem/particleSystemDb.js";

import IText from "../components/text/IText.js";
import TextDB from "../components/text/textDb.js";

import ILineSeg from "../components/lineSeg/ILineSeg.js";
import LineSegDb from "../components/lineSeg/lineSegDb.js";

import ICurve from "../components/curve/ICurve.js";
import CurveDb from "../components/curve/curveDb.js";
import Linker from "./linker.js";
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

export default class CompFactory {
private linker :Linker;
constructor(linker :Linker){
this.linker = linker;
}


///////////////////////////////////////////////
curve(startX :number ,startY :number,midX :number,midY :number,endX :number,endY :number, color:string="black"):ICurve{

let g = new CurveDb (this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(), startX,startY,midX,midY,endX,endY, color);
this.linker.push(g);
return g;    
}
arrow(x1 :number, y1 :number, x2 :number, y2 :number,color :string="black"):IArrow{
let g = new ArrowDb (this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(), x1, y1, x2, y2,color);
this.linker.push(g);
return g;    
} 
canvasBorder(color :string="grey",width :number=0.25):ICanvasBorder{
let g = new CanvasBorderDb (
    this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(), color,width);
this.linker.push(g);
return g;    
}

fillRect(color :string="#000000"):IComponent{
let g = new FillRectDB(this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),color);
this.linker.push(g);
return g;    
}

particleSystem(count :number= 20,color :string="#008000",delay :number=50):IParticleSystem{

let g = new ParticleSystemDB(this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),count,color,delay);

this.linker.push(g);
return g;    
}

rect(color :string="#000000"):IRect{
let g = new RectDB(this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),color);
this.linker.push(g);
return g;    
}

text(content :string,color :string="#000000"):IText{
let g = new TextDB(this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),this.linker.charsWidth,content,color);
this.linker.push(g);
return g;    
}

grid(color :string="grey",cellWidth :number=10,cellHeight :number=10):IGrid{
let g = new GridDb (this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),color,cellWidth,cellHeight);
this.linker.push(g);
return g;    
}
circle(radius :number=5,color :string="black"):ICircle{
let g = new CircleDb (this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),radius,color);
this.linker.push(g);
return g;    
}
marker(x :number,y :number, color :string="red",radius :number= 1):ICircle{
let g = new MarkerDb (this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),x,y,color,radius);
this.linker.push(g);
return g;    
}

line( x1 :number , y1 :number , x2 :number ,y2 :number,color:string="black"):ILine{
let g = new LineDb (this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),x1,y1,x2,y2,color);
this.linker.push(g);
return g;    
}
lineSeg(x :number,y :number,hue_0_360:number = 0,lineWidth :number = 4,):ILineSeg{
let g = new LineSegDb (this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),
    x,y,hue_0_360,lineWidth);
this.linker.push(g);
return g;    
}

pic(imgUrl :string,width :number=25,height:number=25):IPic{
let g = new PicDb (this.linker.startTime(),this.linker.endTime(),this.linker.insertAction(),this.linker.canvasWidth(),this.linker.canvasHeight(),imgUrl,width,height);
this.linker.push(g);
return g;    
}

/////////--------components functions---///////////
    
}