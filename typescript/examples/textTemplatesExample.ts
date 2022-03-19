import {Bilzaa2d} from "../index.js";
import DataFn from "../components/grid/DataFn.js";
let b = new Bilzaa2d("bilzaa",1100,600);

// let grid  = GridTemplates.dashedGrid();
// let grid  = b.add.grid();
let randomBg  = b.add.randomBgShapes();
let circle  = b.add.circle();
let fc  = b.add.frameCounter(400,100);
// grid.cell_width = 50;
// b.insert(grid);

let txt01 =  b.add.textTempl.allVisible("Is it final?");
txt01.d.x = 150;
txt01.d.y = 150;
let txt = b.add.textTempl.txt("oyaaa mumboo jumboo",5,10);
txt.d.fontFamily =   txt.fontFamilyNames.CourierNew;
txt.d.flagDrawBoundingRectangle = true;
let txtBg = b.add.textTempl.txtBg("I guess it is",5,50);
// console.log("b.chqCollision(160,160)",b.chqCollision(160,160));
   b.start();
   // b.start();