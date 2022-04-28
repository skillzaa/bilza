// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("dynamicFontSize",800,300);
let g = bil.add.gridTempl.dashed();

let txt01 = bil.add.textTempl.hdg(0,60,"Sample Text","#008000",0,0);
//////////////////////////////////
bil.draw();
///////////////////////////////

let dims = 0;
let inter = setInterval(function(){
    dims +=10;
    if (dims >= 100) { 
        bil.setCanvas(400,150);
        clearInterval(inter);
    }
bil.dynamicFontSize(txt01,dims,dims);
bil.draw();
},1000);