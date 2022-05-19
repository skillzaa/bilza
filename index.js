// import Bilza from "../src/Bilza.js";
import Bilza from "../../build/bilzaEngine_0_0_15.js";
import clip01 from "./clip01.js";
import clip02 from "./clip02.js";
// import Rect from "./src/components/rect/rect.js";
// import TestComp from "./src/testComp/testComp.js";


let bil = new Bilza("bilza");
//---------------------------------
const tst = clip02("clip02");
bil.insert.append(tst,tst.duration);

//-----------------------------
let first = clip01("first",20);
bil.insert.append(first,first.duration);



//--////////////////////////////
bil.init();
bil.start();
// bil.drawInit();
///////////////////////////////
