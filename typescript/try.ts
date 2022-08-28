import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
//--------------------
const grid = cf.grid(10,10,hsl(240));

grid.setRespCellDims(true);
bil.insert.add(grid,0,15);
//--------------------
const ui = new Ui(bil);
bil.draw();
