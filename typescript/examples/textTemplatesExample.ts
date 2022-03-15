import {Bilzaa2d,Text} from "../index.js";

let b = new Bilzaa2d("bilzaa");
b.canvasWidth = 600;
b.canvasHeight = 1400;
b.init();

// let grid  = GridTemplates.dashedGrid();
// grid.cell_width = 50;
// b.add(grid);

let txt01 =  b.add.textTempl.allVisible("Is it final?");
txt01.d.x = 150;
txt01.d.y = 150;
let txt = b.add.textTempl.txt("oyaaa mumboo jumboo",5,10);
let txtBg = b.add.textTempl.txtBg("I guess it is",5,50);

   b.draw();
   // b.start();