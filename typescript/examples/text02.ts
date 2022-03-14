
import {Bilzaa2d,Text,GridTemplates,XAlignment,YAlignment, Grid} from "../index.js";

let b = new Bilzaa2d("bilzaa");
b.canvasWidth = 900;
b.canvasHeight = 500;
b.init();

// let grid  = GridTemplates.dashedGrid();
let grid  = new Grid();
grid.cell_width =60;
b.add(grid);

let txt = new Text();
txt.d.fontSize = 50;
txt.d.content = "ABCD" ;
txt.d.x = 0 ;
txt.d.y = 0 ;
txt.d.xAlignment = XAlignment.Left;
txt.d.yAlignment = YAlignment.Top;
txt.d.fontColor = "blue";

txt.d.shadow = false;
//-----------------------
txt.d.underline = false;
txt.d.underlineColor = "red";

txt.d.overline = false;
txt.d.overlineColor = "green";

txt.d.padding = 50;
txt.d.margin = 50;
txt.d.borderWidth = 50;
txt.d.border = true;
txt.d.borderColor = "green";
//-----------------------
b.add(txt);

console.log("padding",txt.d.padding);
console.log("margin",txt.d.margin);
console.log("border",txt.d.borderWidth);
// console.log("width",txt.width());

   b.draw();
   // b.start();