import Grid from "./grid.js";
import Rect from "./rect.js";
import FillRect from "./fillRect.js";
import StaticGrid from "./staticGrid.js";
import FrameCounter from "./frameCounter.js";
import BgCircles from "./bgCircles.js";
import Text from "./text/text.js";
import Pic from "./pic.js";

import PlainText from "./plainText.js";


export default class CompFactory {

static pic(imgId :string,dynWidth:number=10,dynHeight :number=10){
let g = new Pic(imgId,dynWidth,dynHeight);
return g;    
}
static staticGrid(cellWidth :number=100,cellHeight :number=100, color :string){
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
static bgCircles(count :number= 10,color :string="#008000",delay :number=1){
let g = new BgCircles(count,color,delay);
return g;    
}

static plainText(content :string="",colorHax :string="#000000"){
let g = new PlainText(content,colorHax);
return g;    
}
static text(content :string="",colorHax :string="#000000"){
let g = new Text(content,colorHax);
return g;    
}
// static Line(x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){
// let g = new Line(x1,y1,x2,y2,color);
// return g;    
// }


}