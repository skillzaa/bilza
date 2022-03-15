
import {Bilzaa2d,Text,GridTemplates,XAlignment,YAlignment, Grid} from "../index.js";
import Rectangle from "../components/rectangle/rectangle.js";
import FrameCounter from "../components/frameCounter/frameCounter.js";

let b = new Bilzaa2d("bilzaa");
b.canvasWidth = 400;
b.canvasHeight = 400;
b.init();

// let grid  = GridTemplates.dashedGrid();
let grid  = new Grid();
grid.cell_width = 50;
b.add(grid);

let fc = new FrameCounter();
fc.x = 50;
b.add(fc);


   b.draw();
   // b.start();