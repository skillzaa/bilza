// import Bilza from "../00lib/Bilza_0_0_13.js";

import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",60);
bil.dynamicCanvas(70);

// let g = bil.add.grid();
let c = bil.add.counter();
// let jt = bil.textTempl.jt(0,10,"Introducing Bilza.js","#008000");

let h1 = bil.textTempl.h1(1,60,"What is Bilza","#008000");

let pt01 = bil.textTempl.bulletPointMid(1,60,"Bilza.js is a javascript framework for creating","#ff0000",45);


let pt02 = bil.textTempl.bulletPointMid(1,60,"business and educational visualizations ","#ff0000",65);

let pt03 = bil.textTempl.bulletPointMid(1,60,"in the browser using HTML5 canvas.","#ff0000",85);

let rect = bil.add.rect(0,300,10,10,25,25);
rect.d.lineWidth = 10;
rect.d.color = "#0000ff";
// let txt = bil.textTempl.h1(5,60,"Simple Text","#008000",50,50);
// let txt02 = bil.add.text(0,15,"Bla Bla Bla","#0000ff",10,20,20,20);
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