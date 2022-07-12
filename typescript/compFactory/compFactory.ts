import Grid from "../components/grid.js";
import Rect from "../components/rect.js";
import FillRect from "../components/fillRect.js";
import StaticGrid from "../components/staticGrid.js";
import FrameCounter from "../components/frameCounter.js";
import CircleParticles from "../components/circleParticles.js";
import Text from "../components/text.js";
import Pic from "../components/pic.js";
import Line from "../components/line.js";
import RawText from "../components/rawText.js";
import Marker from "../components/marker.js";
import Circle from "../components/circle.js";
////////////////////////////////////////////////////
import Row from "../container/row.js";
import Paragraph from "../container/paragraph.js";

export default class CompFactory {

static circle(colorHax :string="red"){
let g = new Circle(colorHax);
return g;    
}
static marker(colorHax :string="red"){
let g = new Marker(colorHax);
return g;    
}
static pic(imgId :string,dynWidth:number=10,dynHeight :number=10){
let g = new Pic(imgId,dynWidth,dynHeight);
return g;    
}
static staticGrid(cellWidth :number=100,cellHeight :number=100, color :string="#efe1e1"){
let g = new StaticGrid(cellWidth,cellHeight, color);
return g;    
}
static grid(colorHax :string="grey",cellWidthPerc :number=10,cellHeightPerc :number=10){
let g = new Grid(colorHax,cellWidthPerc,cellHeightPerc);
return g;    
}
static rect(color :string="#000000"){
let g = new Rect(color);
return g;    
}
static fillRect(color :string="#000000"){
let g = new FillRect(color);
return g;    
}
static frameCounter(color :string="#000000"){
let g = new FrameCounter(color);
return g;    
}
static circleParticles(count :number= 10,color :string="#008000",framesToSkip :number=50){
let g = new CircleParticles(count,color,framesToSkip);
return g;    
}



static rawText(content :string="",colorHax :string="#000000"){
let g = new RawText(content,colorHax);
return g;    
}
static text(content :string="",colorHax :string="#000000"){
let g = new Text(content,colorHax);
return g;    
}
static line(x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
let g = new Line(x1,y1,x2,y2,color);
return g;    
}
////////////---container--------------///////

static row(incommingTextArray :string = "one two"){
let g = new Row(incommingTextArray);
return g;    
}
static paragraph(){
let g = new Paragraph();
return g;    
}
    

}