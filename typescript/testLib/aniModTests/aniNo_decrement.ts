import BaseTest from "../baseTest.js";
import AniNumber from "../../animationModule/aniNumber/aniNumber.js";


const tst = new BaseTest(" AniNumber Decrement ");
const no = new AniNumber(0);

//----------------------------------------
no.animate(0,10000,100,0);

no.update(0);
tst.isEqual(no.value(),100,"dec-0");
no.update(1000);
tst.isEqual(no.value(),90,"dec-1000");
no.update(2000);
tst.isEqual(no.value(),80,"dec-2000");
no.update(3000);
tst.isEqual(no.value(),70,"dec-3000");
no.update(4000);
tst.isEqual(no.value(),60,"dec-4000");
no.update(5000);
tst.isEqual(no.value(),50,"anim-5000=0");

no.update(6000);
tst.isEqual(no.value(),40,"anim-6000");

no.update(7000);
tst.isEqual(no.value(),30,"anim-7000");

no.update(7500);
tst.isEqual(no.value(),25,"anim-7500-mid-=50");

no.update(8000);
tst.isEqual(no.value(),20,"anim-8000");
no.update(9000);
tst.isEqual(no.value(),10,"anim-9000");

no.update(10000);
tst.isEqual(no.value(),0,"anim-10000=100");
