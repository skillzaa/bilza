import Bilza from "../index.js";

let bil = new Bilza("bilza",800, 300, 1000);
let grid = bil.add.grid(0,15000);

grid.d.flagDrawNumbers = true;
grid.data.colorNumbers = "red";
grid.d.fontSize = 12;
grid.d.cellWidth = 100;
grid.d.cellHeight = 20;
grid.d.colorHorizontalLines = "blue";
grid.d.colorVerticalLines = "brown";
grid.d.lineWidthVertical = 10;
grid.d.lineWidthHorizontal = 2;
// bil.add.counter(0,0,15000);


bil.draw();