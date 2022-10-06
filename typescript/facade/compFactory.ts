// import IComponent from "../compDb/IComponent.js";
import IComponent from "../compDb/IComponent.js";
import FillRectDB from "../components/fillRect/fillRectDb.js";
import RectDB from "../components/rect/rectDb.js";
import IRect from "../components/rect/Irect.js";
import CanvasBorderDb from "../components/canvasBorder/canvasBorderDb.js";
import ICanvasBorder from "../components/canvasBorder/ICanvasBorder.js";
import GridDb from "../components/grid/gridDb.js";
import IGrid from "../components/grid/IGrid.js";
import CircleDb from "../components/circle/circleDb.js";
import ICircle from "../components/circle/ICircle.js";
import PicDb from "../components/pic/picDb.js";
import IPic from "../components/pic/IPic.js";
import LineDb from "../components/line/lineDb.js";
import ILine from "../components/line/ILine.js";
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
let g = new FillRectDB(this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
this.comps.push(g);
return g;    
}
rect(color :string="#000000"):IRect{
let g = new RectDB(this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,color);
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
pic(imgUrl :string,width :number=25,height:number=25):IPic{
let g = new PicDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,imgUrl,width,height);
this.comps.push(g);
return g;    
}
line( x1 :number , y1 :number , x2 :number ,y2 :number,color:string="black"):ILine{
let g = new LineDb (this.startTime,this.endTime,this.insertAction,this.canvasWidth,this.canvasHeight,x1,y1,x2,y2,color);
this.comps.push(g);
return g;    
}
/////////--------components functions---///////////
    
}