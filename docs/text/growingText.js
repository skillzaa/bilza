import Bilza from "../../build/Bilza_0_0_13.js";

let bil = new Bilza("growingText",800,300);
let g = bil.add.gridTempl.dashed();
let first = bil.add.text(0,60,"Text Sample","red");
//////////////////////////////////
bil.start();
///////////////////////////////
let interval = setInterval(function(){
    if (first.d.widthPercent > 200) {clearInterval(interval); }    
first.d.widthPercent += 1; 
first.d.heightPercent += 1; 
},150);
