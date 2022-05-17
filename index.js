// import Bilza from "../src/Bilza.js";
import Bilza from "../../build/bilzaEngine_0_0_15.js";

import TestComp from "./src/testComp/testComp.js";
let bil = new Bilza("bilza");
let tst = new TestComp();
bil.insert.append(tst,50);
//////////////////////////////////
bil.start();
///////////////////////////////
