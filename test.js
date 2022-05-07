// import Bilza from "../lib/Bilza_0_0_13.js";
import Bilza from "./src/Bilza.js";

let bil = new Bilza("bilza",60,500,300);
let g = bil.gridTempl.simple();
// g.d.flagDrawNumbers = true;
let c = bil.add.counter(0,100,"lt");
// c.hdg.d.dynWidth = 10;
// c.hdg.d.dynHeight = 10;
//////////////////////////////////
//////////////////////////////////
bil.start();
///////////////////////////////
