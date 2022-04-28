// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("dynamicFontSize",800);
let g = bil.gridTempl.dashed();
g.d.flagDrawNumbers = true;

let txt = bil.add.text(0,60,"Dynamic Text","#008000",0,0);
txt.d.flagUseDynResize = true;
txt.d.dynWidth = 100;
//////////////////////////////////
bil.drawInit();
///////////////////////////////

let newCanvasWidth = 800;
let inter = setInterval(function(){
    if (newCanvasWidth <= 200) { 
        clearInterval(inter);
    }
bil.setCanvas(newCanvasWidth); //just width no height
bil.drawInit();
newCanvasWidth -=50;
},1000);