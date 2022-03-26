import { IDrawable } from "../index.js";
import Grid from "../components/grid/grid.js";


export default class GridTemplates {
private addToArray :IDrawable[];
 
constructor(comps :IDrawable[]){
this.addToArray = comps;
}
dashedGrid():Grid{
    let g = new Grid();
    g.shadowsOff();
    this.addToArray.push(g);
    g.d.flagDrawNumbers =false; //no numbers
    g.d.colorNumbers = "red";
    g.d.lineWidthHorizontal = 1;
    g.d.lineWidthVertical = 1;
    g.d.fontSize = 15;
    g.d.colorHorizontalLines = "#dee1e2";
    g.d.colorVerticalLines = "#dee1e2";
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
}