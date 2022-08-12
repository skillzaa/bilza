import BaseTest from "../baseTest.js";
import AniNumber from "../../animationModule/aniNumber/aniNumber.js";


const tst = new BaseTest(" AniNumber Increment ");
const no = new AniNumber(0);

//----------------------------------------
no.animate(0,10000,0,100);

no.update(0);
tst.isEqual(no.value(),0,"inc-0");
no.update(1000);
tst.isEqual(no.value(),10,"inc-1000");
no.update(2000);
tst.isEqual(no.value(),20,"inc-2000");
no.update(3000);
tst.isEqual(no.value(),30,"inc-3000");
no.update(4000);
tst.isEqual(no.value(),40,"inc-4000");
no.update(5000);
tst.isEqual(no.value(),50,"inc-5000=0");

no.update(6000);
tst.isEqual(no.value(),60,"inc-6000");

no.update(7000);
tst.isEqual(no.value(),70,"inc-7000");

no.update(7500);
tst.isEqual(no.value(),75,"inc-7500-mid-=50");

no.update(8000);
tst.isEqual(no.value(),80,"inc-8000");
no.update(9000);
tst.isEqual(no.value(),90,"inc-9000");

no.update(10000);
tst.isEqual(no.value(),100,"inc-10000=100");
