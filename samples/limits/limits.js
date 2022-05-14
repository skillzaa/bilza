// import Bilza from "../lib/Bilza_0_0_13.js";
import Bilza from "../src/Bilza.js";

let bil = new Bilza("bilza",60,1000,500);
// let g = bil.gridTempl.simple();
let g = bil.add.grid(0,60000,"#0000ff");
 
let txt08 = bil.textTempl.rm();
txt08.d.dynWidth = 40;
txt08.d.dynHeight = 30;

let txt01 = bil.add.text(0,50000,"Real Test","#008000",0,0,40,20);
txt01.d.colorBg = "#ff0000";
txt01.d.showBg = true;
// let txt07 = bil.textTempl.rm();
// let txt06 = bil.textTempl.rb();

// let txt02 = bil.textTempl.lt(0,60000,"Left Top","#008000");
// let txt01 = bil.textTempl.lm(0,60000,"Left Mid","#008000");
// let txt = bil.textTempl.lb(0,60000,"Left Bot","#008000");

// let txt03 = bil.textTempl.mt(0,60000,"Simple Text","#008000");
// let txt04 = bil.textTempl.mm(0,60000,"Simple Text","#008000");
// let txt05 = bil.textTempl.mb(0,60000,"Simple Text","#008000");
//////////////////////////////////
//////////////////////////////////
bil.draw();
///////////////////////////////
let wd = 1000;
let inter  = setInterval(() => {
    wd -= 100;
    bil.setCanvas(wd,wd/2);
    bil.draw();
    if (wd <= 300){ clearInterval(inter);}
}, 3000);
