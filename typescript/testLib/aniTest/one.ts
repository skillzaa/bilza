import BaseTest from "../baseTest.js";

import AniNumber from "../../aniMod/aniNumber.js";

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

aniNo02.goto(2000,10);
aniNo02.animate(3000,6000,20,220);

tst.toEqual(aniNo02.value(3000) , 20, "aniNo02.value(3000) , 20");
tst.isGreaterThan(aniNo02.value(3001) , 20, "aniNo02.value(3000) , 20");
