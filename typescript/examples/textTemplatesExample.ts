import {Bilzaa2d,Text,GridTemplates,XAlignment,YAlignment, Grid} from "../index.js";
import TextTemplates from "../components/text/textTemplates.js";

let b = new Bilzaa2d("bilzaa");
b.canvasWidth = 600;
b.canvasHeight = 1400;
b.init();

let grid  = GridTemplates.dashedGrid();
grid.cell_width = 50;
b.add(grid);

let txt01 = Text.templates().allVisible();
txt01.d.x = 150;
txt01.d.y = 150;
b.add(txt01);

let txt = Text.templates().txt(5,10,"simple text");
b.add(txt);

let txtBg = Text.templates().txtBg(5,50,"Text with Background");
// let txtBg = TextTemplates.txtBg(5,50,"Text with Background");
b.add(txtBg);

//----since we are drawing rectangles while drawing
// margin,border etc so its visible from under other
   b.draw();
   // b.start();