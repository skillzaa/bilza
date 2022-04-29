// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("useRelativeXY",600,300);
let txt = bil.add.text(0,400,"use of relative X and Y","#008000",50,50);
//////////////////////////////////
bil.draw();
///////////////////////////////
window.setInterval(function(){
    txt.d.flagUseRelativeXY = !txt.d.flagUseRelativeXY;
    bil.draw();
},2000);
