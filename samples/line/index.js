// import Bilza from "../00lib/Bilza_0_0_14.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",60,800,400);
bil.gridTempl.simple("grey");

let lineWidth = 12;
//--cross lines
let line01 = bil.add.line(0,300,0,0,100,100,"#008000",lineWidth);  //green line
let line02 = bil.add.line(0,300,100,0,0,100,"#ff0000",lineWidth); //red line
//-- Plus lines
let line03 = bil.add.line(0,300,50,0,50,100,"#0000ff",lineWidth); //blue line
let line04 = bil.add.line(0,300,0,50,100,50,"#ffff00",lineWidth); ////yellow line
//-- 20% and 80% line
let line05 = bil.add.line(0,300,0,20,100,20,"#ffffff",lineWidth);//White line
let line06 = bil.add.line(0,300,0,80,100,80,"#000000",lineWidth);//Black line
//////////////////////////////////
bil.draw();
///////////////////////////////
// let increase = true;
let inter = setInterval(function(){    
if (lineWidth > 200){
    lineWidth = 1;
}else {
    lineWidth += 1;
}
    line01.d.lineWidth = lineWidth ;
    line02.d.lineWidth = lineWidth ;
    line03.d.lineWidth = lineWidth ;
    line04.d.lineWidth = lineWidth ;
    line05.d.lineWidth = lineWidth ;
    line06.d.lineWidth = lineWidth ;
    bil.draw();
},50);