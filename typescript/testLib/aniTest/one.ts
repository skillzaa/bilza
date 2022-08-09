import BaseTest from "../baseTest.js";

import AniNumber from "../../aniMod/aniNumber/aniNumber.js";

const tst = new BaseTest("AniNumber");

const aniNo = new AniNumber(0);
tst.toEqual(aniNo.value(0) , 0, "aniNo.value(0)");
tst.toEqual(aniNo.minValue , 0, "aniNo.minValue");
tst.toEqual(aniNo.maxValue , 100, "aniNo.maxValue");
//-----------------------\
aniNo.goto(5000,50);
tst.toEqual(aniNo.value(4999) , 0, "aniNo.value(4999)");
tst.toEqual(aniNo.value(5000) , 50, "aniNo.value(5000)");
tst.toEqual(aniNo.value(6000) , 50, "aniNo.value(6000)");

aniNo.goto(6500,100);
tst.toEqual(aniNo.value(7000) , 100, "aniNo.value(7000)-goto(6500,100)");

///////////////////////////////////////////
const aniNo02 = new AniNumber(0);
aniNo02.animate(0,10000,0, 1000);//increment

tst.toEqual(aniNo02.value(0) , 0, "aniNo02");
tst.approxEqual(aniNo02.value(2500) , 250,1, "aniNo02");

tst.toEqual(aniNo02.value(5000) , 500, "aniNo02");

tst.approxEqual(aniNo02.value(7500) , 750,1, "aniNo02");
tst.toEqual(aniNo02.value(10000) , 1000, "aniNo02");

//-----------------------------------------decrement
const aniNo03 = new AniNumber(0);
aniNo03.animate(0,10000,1000,0);//decrement

tst.toEqual(aniNo03.value(0) , 1000, "aniNo03");
tst.toEqual(aniNo03.value(2500) , 750, "aniNo03");

tst.toEqual(aniNo03.value(5000) , 500, "aniNo03");

tst.toEqual(aniNo03.value(7500) , 250, "aniNo03");
tst.toEqual(aniNo03.value(10000) , 0, "aniNo03");
//--------------------------------------------------