import BaseTest from "../baseTest.js";
import AniNumber from "../../animationModule/aniNumber/aniNumber.js";


const tst = new BaseTest(" AniNumber Animation Overlap");
const no = new AniNumber(0);

no.animate(0,10000,0,100);

no.update(0);
tst.isEqual(no.value(),0,"no.update(0)");

no.update(5000);
tst.isEqual(no.value(),50,"no.update(5000)");

no.update(6000);
tst.isEqual(no.value(),60,"no.update(5000)");

no.update(7000);
tst.isEqual(no.value(),70,"no.update(5000)");

//----insert goto to overlap --
no.goto(7500,5555);

no.update(8000);
tst.isEqual(no.value(),5555,"no.update(5000)");

no.update(10000);
tst.isEqual(no.value(),5555,"no.update(10000)");

//......................................
