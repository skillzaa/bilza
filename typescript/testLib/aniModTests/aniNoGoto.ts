import BaseTest from "../baseTest.js";
import AniNumber from "../../animationModule/aniNumber/aniNumber.js";


const tst = new BaseTest(" AniNumber Goto ");
const no = new AniNumber(10);

tst.isEqual(no.value(),10,"new AniNumber(10)");

no.set(50);
tst.isEqual(no.value(),50,"no.set(50);. no update required");

no.goto(1000,10);
no.goto(2000,20);
no.goto(3000,30);
no.goto(4000,40);

//-------------------------------//
no.update(500);
tst.isEqual(no.value(),50,"update-500 still = 50");

no.update(1000);
tst.isEqual(no.value(),10,"update-1000=10");

no.update(1500);
tst.isEqual(no.value(),10,"update-1500 still=10");

no.update(2000);
tst.isEqual(no.value(),20,"update-2000=20");
no.update(2500);
tst.isEqual(no.value(),20,"update-2500 still=20");

no.update(3000);
tst.isEqual(no.value(),30,"update-3000=30");

no.update(3999);
tst.isEqual(no.value(),30,"update-3999 still=30");

no.update(4000);
tst.isEqual(no.value(),40,"update-4000=40");

//----------------------------------------
