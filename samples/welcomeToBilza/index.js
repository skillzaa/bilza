// import Bilza from "../00lib/Bilza_0_0_13.js";

import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",60);
bil.dynamicCanvas(90);

// let g = bil.add.grid();
let c = bil.add.counter();
let txt = bil.textTempl.h1(5,60,"Simple Text","#008000",50,50);
let txt02 = bil.add.text(0,15,"Bla Bla Bla","#0000ff",10,20,20,20);
//////////////////////////////////
bil.start();
///////////////////////////////


// function getText(startSecond,EndSecond,content,x,y,dynWidth,dynHeight){
    
// let txt02 = bil.add.text(startSecond,EndSecond,content,"#ffffff",x,y,dynWidth,dynHeight);

// txt02.d.xAlignment = txt02.xAlignmentOptions.Mid; 
// txt02.d.yAlignment = txt02.yAlignmentOptions.Mid; 
// txt02.d.colorBg = "#0000ff";
// txt02.d.showBg = true;
// txt02.d.padding = 10;
// return txt02;
// }