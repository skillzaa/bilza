//import Bilza from "../src/Bilza.js";
import Bilza from "../../build/bilzaEngine_0_0_15.js";

import TestComp from "./src/testComp/testComp.js";
let bil = new Bilza("bilza");
let tst = new TestComp();
tst.xx.increment(5,10,200,400); 
bil.insert.append(tst,20);
//--////////////////////////////
bil.start();
///////////////////////////////

// import Increment from "./src/animation/aniNumber/increment.js";
// let inc = new Increment(0,10,0,100);
//     inc.update(2000);
//     console.log("inc.value()",inc.value());
//     expect(inc.value()).toBe(100);