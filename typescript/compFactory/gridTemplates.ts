import { IComponent } from "../Bilza.js";
import Grid from "../components/grid/grid.js";


export default class GridTemplates {

private insert :(comp :IComponent)=>IComponent;

constructor(insert :(comp :IComponent)=>IComponent){
    this.insert = insert;
}
dashed(linesColor :string = "#dee1e2"):Grid{
    let g = new Grid();
    g.shadowsOff();
    this.insert(g);
    g.d.showNumbers =false; //no numbers
    g.d.colorNumbers = "#ff0000";
    g.d.lineWidthHorizontal = 1;
    g.d.lineWidthVertical = 1;
    g.d.fontSize = 25;
    g.d.colorHorizontalLines = linesColor;
    g.d.colorVerticalLines = linesColor;
    g.d.lineDash = [15,5];
    return g;
}
demo(){
    let grid = new Grid();    
this.insert(grid);

grid.d.showNumbers = true;
grid.data.colorNumbers = "red";
grid.d.fontSize = 12;
grid.d.cellWidthPerc = 100;
grid.d.cellHeightPerc = 20;
grid.d.colorHorizontalLines = "blue";
grid.d.colorVerticalLines = "brown";
grid.d.lineWidthVertical = 10;
grid.d.lineWidthHorizontal = 2;
return grid;
}
simple(linesColor :string = "#dee1e2"){
    let grid = new Grid();    
    this.insert(grid);
    grid.d.colorHorizontalLines = linesColor;
    grid.d.colorVerticalLines = linesColor;
    return grid;       
}
}