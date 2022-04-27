import Bilza from "../../src/Bilza.js";
let bil = new Bilza("bilza");
bil.dynamicCanvas(90,90);
let g = bil.add.gridTempl.dashed();

let first = bil.add.textTempl.hdg(
    "This is the Title",
    "#0000ff",null,0,0,10,10);
first.d.xAlignment = first.xAlignmentOptions.Left;
//////////////////////////////////
bil.start();


setInterval(function(){
first.d.widthPercent += 1; 
first.d.heightPercent += 1; 
},150);