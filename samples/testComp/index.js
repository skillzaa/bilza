import Bilza from "../../src/Bilza.js";
import Text from "../../src/components/text/text.js"

let bil = new Bilza("bilza",1000,500);

let t = new Text(20,"Test Comp");

bil.insert(t);

//////////////////////////////////
bil.start();
///////////////////////////////
