import Grid from "../../components/grid.js";
import Rect from "../../components/rect.js";
import FillRect from "../../components/fillRect.js";
import FrameCounter from "../../components/frameCounter.js";
import ParticleSystem from "../../components/particleSystem.js";
import Text from "../../components/text/text.js";
import Pic from "../../components/pic.js";
import Line from "../../components/line.js";
import Circle from "../../components/circle.js";
import CanvasBorder from "../../components/canvasBorder.js";
import Wave from "../../components/wave.js";
import Arrow from "../../components/arrow/arrow.js";
import Marker from "../../components/marker.js";
////////////------------09-comps----------////////////////////
// import Slide from "../slide/slide.js";
// import Icon from "../components/icon.js";
// import Marker from "../components/marker.js";
////////////////////////////////////////////////////
import Row from "../../container/row.js";
// import Paragraph from "../container/paragraph.js";
import SpriteSheet from "../../components/spriteSheet/spriteSheet.js";
import SpriteSheetAlt from "../../components/spriteSheet/spriteSheetAlt.js";
// import IScene from "../../scene/IScene.js";
//-----------------scenes
// import Scenes from "./scenes.js";
// import Insert from "./insert.js";
// import Duration from "./duration.js";
// import Comps from "../comps.js";
import { IComponent } from "../../bilza.js";

export default class CompFactory {
private readonly startTime :number;
private readonly endTime :number;
private actionType :string;
private insert : (comp :IComponent,startTime :number,endTime :number,actionType :string)=>IComponent;

////////////////////////////////////////////////////
constructor(startTime :number,endTime :number,actionType :string="add", insert : (comp :IComponent,startTime :number,endTime :number,actionType :string)=>IComponent){

this.insert = insert;
this.startTime = startTime;
this.endTime = endTime;
this.actionType = actionType;
}

/////////--------components functions---///////////
arrow(x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
let g = new Arrow(x1,y1,x2,y2,color);
this.insert(g,this.startTime,this.endTime,this.actionType);
return g;    
}

circle(radius :number=10,colorHax :string="red"){
let g = new Circle(radius,colorHax);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}

canvasBorder(color :string="grey" , borderWidth :number=5){
let g = new CanvasBorder(color, borderWidth);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}

grid(cellWidthPerc :number=10,cellHeightPerc :number=10,colorHax :string="grey"){
let g = new Grid(cellWidthPerc,cellHeightPerc,colorHax);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}
pic(imgId :string,dynWidth:number=10,dynHeight :number=10){
let g = new Pic(imgId,dynWidth,dynHeight);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}
rect(color :string="#000000"){
let g = new Rect(color);
this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}
spriteSheetAlt(imgUrl :string):SpriteSheetAlt{
let g = new SpriteSheetAlt(imgUrl);
this.insert(g,this.startTime,this.endTime,this.actionType);
return g;
}
//  slide(startTime :number,endTime :number,themeHue_0_to_360 :number=240):Slide{
// let g = new Slide(startTime,endTime,themeHue_0_to_360);
// return g;
// }
spriteSheet(imgUrl :string, IconWidth:number, IconHeight :number, totalColumns :number ,totalRows :number):SpriteSheet{
let g = new SpriteSheet(imgUrl, IconWidth, IconHeight, totalColumns,totalRows);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;
}
text(content :string="",colorHax :string="#000000"){
let g = new Text(content,colorHax);
// 
this.insert(g,this.startTime,this.endTime,this.actionType);
return g;    
}

//  icon(code:number = 9876,colorHax :string="#008000"){
// let g = new Icon(code,colorHax);
// return g;    
// }

//  marker(colorHax :string="red"){
// let g = new Marker(colorHax);
// return g;    
// }

fillRect(color :string="#000000"){
let g = new FillRect(color);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}

frameCounter(Hue_0_to_360 :number=240){
let g = new FrameCounter(Hue_0_to_360);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}

particleSystem(count :number= 10,color :string="#008000",framesToSkip :number=50){
let g = new ParticleSystem(count,color,framesToSkip);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}


line(x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
let g = new Line(x1,y1,x2,y2,color);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}

marker(x :number=50,y :number=50,color :string="red",radius=2){
let g = new Marker(x,y,color,radius);
this.insert(g,this.startTime,this.endTime,this.actionType);
return g;    
}

////////////---container--------------///////

row(incommingTextArray :string = "one two"){
let g = new Row(incommingTextArray);

this.insert(g,this.startTime,this.endTime,this.actionType);

return g;    
}
wave(){
    let g = new Wave();
    this.insert(g,this.startTime,this.endTime,this.actionType);
    return g;    
}
//  paragraph(){
// let g = new Paragraph();
// return g;    
// }
    
}