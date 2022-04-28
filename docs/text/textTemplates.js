// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("textTemplateHdg",400,200);
let g = bil.add.gridTempl.dashed();
let txt = bil.add.textTempl.hdg(0,60,"Text Template hdg","");
txt.d.fontSize = 30;
//////////////////////////////////
bil.draw();
///////////////////////////////
