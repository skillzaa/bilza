
import {Bilzaa2d,Text,GridTemplates,XAlignment,YAlignment, Grid} from "../index.js";
import Rectangle from "../components/rectangle/rectangle.js";

let b = new Bilzaa2d("bilzaa");
b.canvasWidth = 400;
b.canvasHeight = 400;
b.init();

// let grid  = GridTemplates.dashedGrid();
let grid  = new Grid();
grid.cell_width = 50;
b.add(grid);

let rec = new Rectangle();
rec.d.x = 50;
rec.d.y = 50;
rec.d.width = 50;
rec.d.height = 200;
rec.d.borderWidth = 50;
rec.d.margin = 50;
// b.add(grid);
//-----------------------
b.add(rec);

console.log("margin",rec.d.margin);
console.log("border",rec.d.borderWidth);
// console.log("width",rec.width());

   b.draw();
   // b.start();