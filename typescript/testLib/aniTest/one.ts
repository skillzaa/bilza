// import BaseTest from "../baseTest.js";

// import AniNumber from "../../aniMod/aniNumber/aniNumber.js";

// const tst = new BaseTest("AniNumber");

// const aniNo = new AniNumber(0);
// aniNo.update(0);
// tst.toEqual(aniNo.value() , 0, "aniNo.value(0)");
// tst.toEqual(aniNo.minValue , 0, "aniNo.minValue");
// tst.toEqual(aniNo.maxValue , 100, "aniNo.maxValue");
// //-----------------------\
// aniNo.goto(5000,50);

// aniNo.update(4999);
// tst.toEqual(aniNo.value() , 0, "aniNo.value(4999)");

// aniNo.update(5000);
// tst.toEqual(aniNo.value() , 50, "aniNo.value(5000)");

// aniNo.update(6000);
// tst.toEqual(aniNo.value() , 50, "aniNo.value(6000)");

// aniNo.goto(6500,100);

// aniNo.update(7000);
// tst.toEqual(aniNo.value() , 100, "aniNo.value(7000)-goto(6500,100)");

// ///////////////////////////////////////////
// const aniNo02 = new AniNumber(0);
// aniNo02.animate(0,10000,0, 1000);//increment

// aniNo02.update(0);
// tst.toEqual(aniNo02.value() , 0, "aniNo02");

// aniNo02.update(2500);
// tst.approxEqual(aniNo02.value() , 250,1, "aniNo02");

// aniNo02.update(5000);
// tst.toEqual(aniNo02.value() , 500, "aniNo02");

// aniNo02.update(7500);
// tst.approxEqual(aniNo02.value() , 750,1, "aniNo02");

// aniNo02.update(10000);
// tst.toEqual(aniNo02.value() , 1000, "aniNo02");

// //-----------------------------------------decrement
// const aniNo03 = new AniNumber(0);
// aniNo03.animate(0,10000,1000,0);//decrement

// aniNo03.update(0);
// tst.toEqual(aniNo03.value() , 1000, "aniNo03");
// aniNo03.update(2500);
// tst.toEqual(aniNo03.value() , 750, "aniNo03");

// aniNo03.update(5000);
// tst.toEqual(aniNo03.value() , 500, "aniNo03");

// aniNo03.update(7500);
// tst.toEqual(aniNo03.value() , 250, "aniNo03");
// aniNo03.update(10000);
// tst.toEqual(aniNo03.value() , 0, "aniNo03");
// //--------------------------------------------------