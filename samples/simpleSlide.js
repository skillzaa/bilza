// import Bilza from "../lib/Bilza_0_0_13.js";
import Bilza from "./src/Bilza.js";

let bil = new Bilza("bilza",60,500,300);
let g = bil.gridTempl.simple();
g.d.flagDrawNumbers = true;
bil.add.counter();

let txt = bil.textTempl.h1(5,60,"Simple Text","#008000",50,50);
let txt02 = bil.textTempl.bulletPointMid(10,60,"Some random point","#ff0000",45);
let txt03 = bil.textTempl.bulletPointMid(20,60,"Another random point", "#0000ff",65);
let txt04 = bil.textTempl.bulletPointMid(30,60,"Another random point", "#008000",85);

//////////////////////////////////
//////////////////////////////////
bil.start();
///////////////////////////////
