// import Bilza from "../lib/Bilza_0_0_13.js";
import Bilza from "../src/Bilza.js";

let bil = new Bilza("bilza",60,600,300);
let g = bil.gridTempl.simple();
// g.d.flagDrawNumbers = true;
// bil.add.counter();

let txt08 = bil.textTempl.rt();
let txt07 = bil.textTempl.rm();
let txt06 = bil.textTempl.rb();

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
