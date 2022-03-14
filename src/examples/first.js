import { Bilzaa2d, Grid } from "../index.js";
import BoxSys from "../components/boxSys/boxSys.js";

let b = new Bilzaa2d("bilzaa");
b.canvasWidth = 600;
b.canvasHeight = 400;
b.init();
// let grid  = GridTemplates.dashedGrid();
let grid = new Grid();
grid.cell_width = 50;
b.add(grid);

let item = new BoxSys();

//-----------------------
b.add(item);
b.draw();
// b.start();
