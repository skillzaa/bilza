import Bilza from "../../src/Bilza.js";
import TestComp from "../../src/componentsModule/testComp/testComp.js";

let bil = new Bilza("bilza",10);
// bil.dynamicCanvas(20);
let testComp = new TestComp();
bil.insert(testComp);
 
//////////////////////////////////
bil.start();
///////////////////////////////
let wd = 10;
let inter  = setInterval(function(){
if (wd > 100){wd=0;}else {wd+=10;}    
bil.dynamicCanvas(wd);
},1000);