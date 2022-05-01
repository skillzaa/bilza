// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("text_dynWidthHeight",800,400);
let g = bil.gridTempl.simple();
g.d.flagDrawNumbers = true;
// g.d.color
g.d.colorVerticalLines = "black";
g.d.colorHorizontalLines = "black";
let txt = bil.add.text(0,500,"Text One","#e54e12",50,3);
// txt.d.fontSize = 45;
txt.d.border = 2;
txt.d.xAlignment = txt.xAlignmentOptions.Mid;
txt.d.yAlignment = txt.yAlignmentOptions.Top;
txt.d.flagDrawBorder = true;
txt.d.colorBorder = bil.util.lightenDarkenColor("#e54e12",-20);
txt.d.colorBg = bil.util.lightenDarkenColor("#e54e12",175);
txt.d.flagDrawBg = true;
txt.d.dynWidth = 80;
txt.d.dynHeight = 40;
txt.d.flagUseDynResize = true;
txt.d.flagShrinkHeightToFit = true;
//////////////////////////////////
bil.drawInit();
///////////////////////////////
 