import Bilza from "../../src/Bilza.js";
import TestComp from "../../src/testComp/testComp.js"

let bil = new Bilza("bilza",1000,500);
// bil.dynamicCanvas(20);
let testComp = new TestComp();

bil.insert(testComp);

//////////////////////////////////
bil.start();
///////////////////////////////
