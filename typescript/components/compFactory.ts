import Grid from "./grid.js";
import Rect from "./rect.js";
import FillRect from "./fillRect.js";
import StaticGrid from "./staticGrid.js";
import FrameCounter from "./frameCounter.js";


export default class CompFactory {

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


}