import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
//--------------------
const grid = cf.grid(10,10,hsl(240));

grid.lineWidthHorizontal.set(1);
grid.lineWidthVertical.set(1);

grid.colorVerticalLines.set(hsl(240));
grid.colorHorizontalLines.set(hsl(120));

//---Animations
grid.lineWidthHorizontal.animate(1,3,1,20);
grid.lineWidthHorizontal.animate(4,6,20,1);

grid.lineWidthVertical.animate(7,9,1,20);
grid.lineWidthVertical.animate(10,12,20,1);

bil.insert.add(grid,0,15);
//--------------------
const ui = new Ui(bil);
bil.draw();
