// import Bilza from "../00lib/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",60,1000,500);
// let g = bil.gridTempl.simple();
let g = bil.add.grid("#0000ff");
let c = bil.add.counter();
//////////////////////////////////
bil.start();
///////////////////////////////
