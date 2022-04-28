// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("dynamicFontSize",800,300);
let g = bil.gridTempl.dashed();

let txt = bil.add.text(0,60,"Dynamic Text","#008000",0,0);
txt.d.flagUseDynResize = true;
txt.d.dynWidth = 10;
txt.d.xAlignment = txt.xAlignmentOptions.Left;
txt.d.yAlignment = txt.yAlignmentOptions.Top;
//////////////////////////////////
bil.drawInit();
///////////////////////////////
let dims = 10;
let inter = setInterval(function(){
    dims +=10;
    if (dims >= 100) { 
        bil.setCanvas(400,150);
        clearInterval(inter);
    }
txt.d.dynWidth = dims;    
bil.drawInit();
},1000);