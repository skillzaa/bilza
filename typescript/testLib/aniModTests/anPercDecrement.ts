import BaseTest from "../baseTest.js";
import AniPerc from "../../animationModule/aniPerc/aniPerc.js";

const tst = new BaseTest(" AniPerc Decrement ");
const no = new AniPerc(0,true);

//----------------------------------------
no.animate(0,10000,100,0);

//----------------------------------------
//--this is where magic happens
no.init(1000); // canvas width / height (OR WHAT EVER DIMENTION I WANT THIS TO MIRROR) is 1000 perc
//----------------------------------------

no.update(0);
tst.isEqual(no.value(),1000,"inc-0");
no.update(1000);
tst.isEqual(no.value(),900,"inc-1000");
no.update(2000);
tst.isEqual(no.value(),800,"inc-2000");
no.update(3000);
tst.isEqual(no.value(),700,"inc-3000");
no.update(4000);
tst.isEqual(no.value(),600,"inc-4000");
no.update(5000);
tst.isEqual(no.value(),500,"inc-5000=0");

no.update(6000);
tst.isEqual(no.value(),400,"inc-6000");

no.update(7000);
tst.isEqual(no.value(),300,"inc-7000");

no.update(7500);
tst.isEqual(no.value(),250,"inc-7500-mid-=50");

no.update(8000);
tst.isEqual(no.value(),200,"inc-8000");
no.update(9000);
tst.isEqual(no.value(),100,"inc-9000");

no.update(10000);
tst.isEqual(no.value(),0,"inc-10000=100");
