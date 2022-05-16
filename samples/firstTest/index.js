import Bilza from "../../src/Bilza.js";
// import Bilza from "../../build/bilzaEngine_0_0_15.js";
import TestComp from "../../src/compsMod/components/testComp/testComp.js"
import Text from "../../src/compsMod/components/text/text.js"
import Grid from "../../src/compsMod/components/grid/grid.js"

let bil = new Bilza("bilza");

let tst = new TestComp();
let g = new Grid("#0000ff");
let t = new Text(20,"Seperate engine");

bil.insert.append(tst,50);
//////////////////////////////////
bil.start();
///////////////////////////////
