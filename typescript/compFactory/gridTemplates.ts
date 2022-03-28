import { IComponent } from "../Bilza.js";
import Grid from "../components/grid/grid.js";


export default class GridTemplates {
private addToArray :IComponent[];
 
constructor(comps :IComponent[]){
this.addToArray = comps;
}
dashed(linesColor :string = "#dee1e2"):Grid{
    let g = new Grid();
    g.shadowsOff();
    this.addToArray.push(g);
    g.d.flagDrawNumbers =false; //no numbers
    g.d.colorNumbers = "red";
    g.d.lineWidthHorizontal = 1;
    g.d.lineWidthVertical = 1;
    g.d.fontSize = 15;
    g.d.colorHorizontalLines = linesColor;
    g.d.colorVerticalLines = linesColor;
    g.d.lineDash = [15,5];
    return g;
}
demo(){
    let grid = new Grid();    
this.addToArray.push(grid);

grid.d.flagDrawNumbers = true;
grid.data.colorNumbers = "red";
grid.d.fontSize = 12;
grid.d.cellWidth = 100;
grid.d.cellHeight = 20;
grid.d.colorHorizontalLines = "blue";
grid.d.colorVerticalLines = "brown";
grid.d.lineWidthVertical = 10;
grid.d.lineWidthHorizontal = 2;
return grid;
}
simple(linesColor :string = "#dee1e2"){
    let grid = new Grid();    
    this.addToArray.push(grid);
    grid.d.colorHorizontalLines = linesColor;
    grid.d.colorVerticalLines = linesColor;
    return grid;       
}
}