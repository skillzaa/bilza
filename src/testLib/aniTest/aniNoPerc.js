import BaseTest from "../baseTest.js";
import AniNoPercBase from "../../aniMod/aniNoPerc/aniNoPerc.js";
const tst = new BaseTest("AniNoPerc");
const no = new AniNoPercBase(0);
no.goto(1000, 10);
tst.toEqual(no.value(0), 0, "no.value(0)");
tst.toEqual(no.value(1000), 0, "ans= 0 without init");
no.init(true, 1200);
tst.toEqual(no.value(1000), 120, "no.value(1000)-After init");
tst.toEqual(no.value(2000), 120, "no.value(2000)-still 120 since no goto in between");
no.goto(1500, 20);
tst.toEqual(no.value(2000), 120, "no.value(2000)-after no.goto(1500,20)is still 120 and not 240 SINCE NO INIT");
no.init(true, 1200);
tst.toEqual(no.value(2000), 240, "no.value(2000)-after no.goto(1500,20)and init is 240");
