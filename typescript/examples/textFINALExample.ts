import {Bilzaa2d,Text,GridTemplates, Grid} from "../index.js";
import FrameCounter from "../components/frameCounter/frameCounter.js";
import DataFn , {ObjectData,CalcData} from "../components/text/DataFn.js";

let b = new Bilzaa2d("bilzaa");
b.canvasWidth = 400;
b.canvasHeight = 400;
b.init();

// let grid  = GridTemplates.dashedGrid();
// let grid  = new Grid();
// grid.cell_width = 50;
// b.add(grid);

let bs = new Text(DataFn);
bs.d.fontSize = 50;
bs.d.fontColor = "red";

// bs.d.
// bs.d.marginWidth = 10;
// bs.d.drawMarginFlag = true;

// bs.d.borderWidth = 10;
// bs.d.drawBorderFlag = true;

// bs.d.paddingWidth = 10;
// bs.d.drawPaddingFlag = true;

bs.d.colorContentBg = "pink";
bs.d.flagDrawContentArea = true;
// bs.d.drawTextFlag = true;
//----since we are drawing rectangles while drawing
// margin,border etc so its visible from under other
b.add(bs);
   b.draw();
   // b.start();