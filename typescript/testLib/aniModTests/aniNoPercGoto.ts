import BaseTest from "../baseTest.js";
import AniPerc from "../../animationModule/aniPerc/aniPerc.js";


const tst = new BaseTest(" AniPerc  Goto ");
const no = new AniPerc(10,true);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
no.init(1000);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// no.update(0);
tst.isEqual(no.value(),100,"new AniNumber(10)");

no.set(50);
tst.isEqual(no.value(),500,"no.set(50);. no update required");

no.goto(1000,10);
no.goto(2000,20);
no.goto(3000,30);
no.goto(4000,40);

//-------------------------------//
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
no.init(1000); // -init agains since new gotos added
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
no.update(500);
tst.isEqual(no.value(),500,"still no init req");

no.update(1000);
tst.isEqual(no.value(),100,"update-1000=10");

no.update(1500);
tst.isEqual(no.value(),100,"update-1500 still=10");

no.update(2000);
tst.isEqual(no.value(),200,"update-2000=20");
no.update(2500);
tst.isEqual(no.value(),200,"update-2500 still=20");

no.update(3000);
tst.isEqual(no.value(),300,"update-3000=30");

no.update(3999);
tst.isEqual(no.value(),300,"update-3999 still=30");

no.update(4000);
tst.isEqual(no.value(),400,"update-4000=40");

//----------------------------------------
