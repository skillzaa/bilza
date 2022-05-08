import Bilza from "../00lib/Bilza_0_0_13.js";
// import Bilza from "../../src/Bilza.js";

// let bil = new Bilza("bilza",60,1000,500);
//lets see if it works with out any width and height
let bil = new Bilza("bilza",60);
bil.dynamicCanvas(95,null); //default value = 95;

let g = bil.add.grid(0,60000,"#0000ff");
//////////////////////////////////
bil.draw();
///////////////////////////////
/**
 * The problem is that bil.dynamicCanvas(100) or even 95 create a canvas larger than window size 
 */