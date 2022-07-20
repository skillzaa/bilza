import BaseTest from "./baseTest.js";
import Bilza, { Ui,CompFactory as cf ,hsl} from "../bilza.js";

const bil  = new Bilza("bilza");
const tst = new BaseTest("fillRect Test");

const fill = cf.fillRect("green");

tst.toEqual(fill.x.value(),0);
tst.toEqual(fill.y.value(),0);




// tst.toEqual(bil.len(),0);
// tst.toThrow(()=>{ bil.insert.add(cf.grid(),1,0)},"for Add operation to succeed you need component duration greater than 0");
