import BaseTest from "../baseTest.js";
import AniNumber from "../../animationModule/aniNumber/aniNumber.js";


const tst = new BaseTest(" AniNumber Animate ");
const no = new AniNumber(10);

tst.isEqual(no.value(),10,"new AniNumber(10)");

no.set(50);
tst.isEqual(no.value(),50,"no.set(50);. no update required");


//----------------------------------------
no.animate(5000,10000,0,100);

no.update(5000);
tst.isEqual(no.value(),0,"anim-5000=0");

no.update(6000);
tst.isEqual(no.value(),20,"anim-6000");

no.update(7000);
tst.isEqual(no.value(),40,"anim-7000");

no.update(7500);
tst.isEqual(no.value(),50,"anim-7500-mid-=50");

no.update(8000);
tst.isEqual(no.value(),60,"anim-8000");
no.update(9000);
tst.isEqual(no.value(),80,"anim-9000");

no.update(10000);
tst.isEqual(no.value(),100,"anim-10000=100");