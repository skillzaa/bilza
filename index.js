// import Bilza from "../src/Bilza.js";
import Bilza from "../../build/bilzaEngine_0_0_15.js";

import TestComp from "./src/testComp/testComp.js";
let bil = new Bilza("bilza");
let tst = new TestComp();
tst.xx.increment(); 
bil.insert.append(tst,25);
//////////////////////////////////
bil.start();
///////////////////////////////
