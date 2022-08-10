import AniNumber from "../aniMod/aniNumber/aniNumber.js";
import BaseTest from "./baseTest.js";

const tst = new BaseTest("AniNumber NON-Responsive");
///////////////===========Nonresponsive
const no = new AniNumber(0,false);

no.setResponsive(false);
no.set(5);
no.goto(1 * 1000 ,10);
no.goto(2 * 1000 ,20);
no.goto(3 * 1000 ,30);
no.goto(4 * 1000 ,40);
no.goto(5 * 1000 ,50);
no.goto(6 * 1000 ,60);
no.goto(7 * 1000 ,70);
no.goto(8 * 1000 ,80);
no.goto(9 * 1000 ,90);
no.goto(10 * 1000 ,100);

no.update(0)
tst.toEqual(no.value() ,5, "no.set(5);");
no.update(999)
tst.isEqual(no.value() ,5, "no.update(999)");
//----
no.update(1000);
tst.toEqual(no.value() ,10, "no.update(1000)");
no.update(1999);
tst.toEqual(no.value() ,10, "no.update(1000)");
//-----------------------------------------animation
no.update(2000);
tst.toEqual(no.value() ,20, "no.update(2000)");
no.update(2999);
tst.toEqual(no.value() ,20, "no.update(2000)");
//-----------------------------------------animation
no.update(3000);
tst.toEqual(no.value() ,30, "no.update(3000)");
no.update(3999);
tst.toEqual(no.value() ,30, "no.update(3000)");
//-----------------------------------------animation
no.update(4000);
tst.toEqual(no.value() ,40, "no.update(4000)");
no.update(4999);
tst.toEqual(no.value() ,40, "no.update(4000)");
//-----------------------------------------animation
no.update(5000);
tst.toEqual(no.value() ,50, "no.update(5000)");
no.update(5999);
tst.toEqual(no.value() ,50, "no.update(5000)");
//-----------------------------------------animation
no.update(6000);
tst.toEqual(no.value() ,60, "no.update(6000)");
no.update(6999);
tst.toEqual(no.value() ,60, "no.update(6000)");
//-----------------------------------------animation
no.update(7000);
tst.toEqual(no.value() ,70, "no.update(7000)");
no.update(7999);
tst.toEqual(no.value() ,70, "no.update(7000)");
//-----------------------------------------animation
no.update(8000);
tst.toEqual(no.value() ,80, "no.update(8000)");
no.update(8999);
tst.toEqual(no.value() ,80, "no.update(8000)");
//-----------------------------------------animation
no.update(9000);
tst.toEqual(no.value() ,90, "no.update(9000)");
no.update(9999);
tst.toEqual(no.value() ,90, "no.update(9000)");
//-----------------------------------------animation
no.update(10000);
tst.toEqual(no.value() ,100, "no.update(10 000)");
no.update(15000);
tst.toEqual(no.value() ,100, "no.update(10 000)");
//-----------------------------------------animation

