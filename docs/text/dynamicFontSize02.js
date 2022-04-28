// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("dynamicFontSize",500);
let g = bil.add.gridTempl.dashed();
g.d.flagDrawNumbers = true;

let txt = bil.add.textTempl.hdg(0,60,"Sample Text","#008000",0,0);
bil.dynamicFontSize(txt,100);
//////////////////////////////////
bil.draw();
///////////////////////////////

let newCanvasWidth = 500;
let inter = setInterval(function(){
    if (newCanvasWidth <= 300) { 
        clearInterval(inter);
    }
bil.setCanvas(newCanvasWidth); //just width no height
bil.dynamicFontSize(txt,100);
bil.draw();
newCanvasWidth -=20;
},1000);