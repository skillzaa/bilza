// import Bilza from "../00lib/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
import Grid from "../../src/components/grid/grid.js"
import Text from "../../src/components/text/text.js"
import Counter from "../../src/components/counter/counter.js"

let bil = new Bilza("bilza",1000,500);
let c = new Counter(20);
let g = new Grid("#0000ff");
let t = new Text(20,"Seperate engine");

bil.insert(c);
bil.insert(g);
bil.insert(t);

//////////////////////////////////
bil.start();
///////////////////////////////
