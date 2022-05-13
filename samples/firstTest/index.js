import Bilza from "../../src/Bilza.js";
import TestComp from "../../src/componentsModule/testComp/testComp.js"
import Text from "../../src/componentsModule/components/text/text.js"
import Grid from "../../src/componentsModule/components/grid/grid.js"

let bil = new Bilza("bilza");

let tst = new TestComp(50);
let g = new Grid("#0000ff");
let t = new Text(20,"Seperate engine");

bil.insert(tst);
bil.insert(g);
bil.insert(t);

//////////////////////////////////
bil.start();
///////////////////////////////
