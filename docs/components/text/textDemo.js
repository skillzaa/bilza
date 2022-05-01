import Bilza from "../Bilza_0_0_13.js";

let bil = new Bilza("growingText",800,300);
let g = bil.gridTempl.dashed();
let txt = bil.add.text(0,60,"Text Sample","red");
//////////////////////////////////
bil.drawInit();
///////////////////////////////
let interval = setInterval(function(){
// txt.d.fontSize +=1;
bil.drawInit();
},150);
