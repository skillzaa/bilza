// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
import lightenDarkenColor from "../../src/functions/lightenDarkenColor.js";
let bil = new Bilza("basicUsage",800,300);
let g = bil.add.gridTempl.dashed();

let txt01 = bil.add.text(0,500,"Text One","#e54e12",10,3);
txt01.d.fontSize = 45;
txt01.d.border = 5;
txt01.d.flagDrawBorder = true;
txt01.d.colorBorder = lightenDarkenColor("#e54e12",-20);
txt01.d.colorBg = lightenDarkenColor("#e54e12",175);
txt01.d.flagDrawBg = true;
//+++++++++++++++++++++++++++++++++++++++++++++
let txt02 = bil.add.text(0,60,"Text Two","#1026ed",60,3);
txt02.d.fontSize = 50;

txt02.d.border = 10;
txt02.d.flagDrawBorder = true;
txt02.d.colorBorder = lightenDarkenColor("#1026ed",20);
// txt02.d.colorBorder = "red";
txt02.d.colorBg = lightenDarkenColor("#1026ed",175);
txt02.d.flagDrawBg = true;
//+++++++++++++++++++++++++++++++++++++++++++++
let txt03 = bil.add.text(0,60,"Text Three","#0ab513",20,50);
txt03.d.flagDrawBg = true;
txt03.d.colorBg = lightenDarkenColor("#0ab513",175);
txt03.d.border = 20;
txt03.d.flagDrawBorder = true;
txt03.d.colorBorder = lightenDarkenColor("#0ab513",20);
// txt03.d.colorBorder = "red";
txt03.d.fontSize = 75;
//////////////////////////////////
bil.draw();
///////////////////////////////
