// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("textTemplateJT",400,200);
let g = bil.add.gridTempl.dashed();
let txt = bil.add.textTempl.jt(0,60,"Jumbo Tron","#ff0000");
bil.dynamicFontSize(txt,90);
//////////////////////////////////
bil.draw();
///////////////////////////////
