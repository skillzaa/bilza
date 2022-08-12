import BaseTest from "../baseTest.js";
import AniString from "../../animationModule/aniString/aniString.js"; 


const tst = new BaseTest(" AniColor Goto ");
const str = new AniString("zero");

tst.toMatch(str.value(),"zero","new AniNumber(10)");

str.set( "setValue");
tst.toMatch(str.value(),"setValue","str.set(50);. str update required");

str.goto(1000,"thousand");
str.goto(2000,"two thousand");
str.goto(3000,"three thousand");
str.goto(4000,"four thousand");

//-------------------------------//
str.update(500);
tst.toMatch(str.value(),"setValue","");

str.update(1000);
tst.toMatch(str.value(),"thousand","");

str.update(1500);
tst.toMatch(str.value(),"thousand","");

str.update(2000);
tst.toMatch(str.value(),"two thousand","");
str.update(2500);
tst.toMatch(str.value(),"two thousand","");

str.update(3000);
tst.toMatch(str.value(),"three thousand","three thousand");

str.update(3999);
tst.toMatch(str.value(), "three thousand" ,"3999");

str.update(4000);
tst.toMatch(str.value(),"four thousand","");

//----------------------------------------
