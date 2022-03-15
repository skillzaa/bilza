import {Bilzaa2d,Text} from "../index.js";
import DataFn , {ObjectData,CalcData} from "../components/text/DataFn.js";

let b = new Bilzaa2d("bilzaa",400,400);

// let grid  = GridTemplates.dashedGrid();
// let grid  = new Grid();
// grid.cell_width = 50;
// b.add(grid);


b.add.textTempl.txtBg("OK",100,10);
b.add.textTempl.allVisible("OK",100,100);
b.add.textTempl.txt("OK",100,200);
   b.draw();
