import BaseTest from "../baseTest.js";
import AniNumber from "../../animationModule/aniNumber/aniNumber.js";


const tst = new BaseTest(" AniNumber Animation Overlap");
const no = new AniNumber(0);

no.animate(0,10000,0,100);

no.update(0);
tst.isEqual(no.value(),0,"no.update(0)");

no.update(5000);
tst.isEqual(no.value(),50,"no.update(5000)");

no.update(10000);
tst.isEqual(no.value(),100,"no.update(10000)");

//......................................
