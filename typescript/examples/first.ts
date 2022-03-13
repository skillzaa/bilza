
import {Bilzaa2d,Text,GridTemplates,XAlignment,YAlignment} from "../index.js";

let b = new Bilzaa2d("bilzaa");
b.canvasHeight = 300;
b.canvasWidth = 400;
b.init();

let grid  = GridTemplates.dashedGrid();
b.add(grid);

let leftTop = new Text();
leftTop.d.fontSize = 80;
leftTop.d.content = "LeftTop" ;
leftTop.d.x = 70 ;
leftTop.d.y = 10 ;
leftTop.d.xAlignment = XAlignment.Right;
leftTop.d.yAlignment = YAlignment.Top;
leftTop.d.fontColor = "red";
//-----------------------
leftTop.d.underline = true;
leftTop.d.underlineColor = "red";

leftTop.d.overline = true;
leftTop.d.overlineColor = "green";

leftTop.d.highlight = true;
//-----------------------
b.add(leftTop);


   b.draw();
   // b.start();
console.log(b);