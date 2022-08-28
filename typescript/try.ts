import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
//--------------------
const grid = cf.grid(30,30,hsl(240));
grid.setRespCellDims(true);
grid.setxy(10,10);
grid.width.set(50);
grid.height.set(50);

bil.insert.add(grid,0,15);
//--------------------
const ui = new Ui(bil);
bil.draw();
