import BaseTest from "../baseTest.js";
import AniBoolean from "../../animationModule/aniBoolean/aniBoolean.js";

const tst = new BaseTest(" AniBoolean Goto ");

const str = new AniBoolean(true);
tst.toBeTrue(str.value());

str.set( false );
tst.toBeFalse(str.value());



str.goto(1000,true);
str.goto(2000,false);
str.goto(3000,true);
str.goto(4000,false);

//-------------------------------//
str.update(500);
tst.toBeFalse(str.value());



str.update(1000);
tst.toBeTrue(str.value(),"true");

str.update(1500);

str.update(2000);
tst.toBeFalse(str.value());

str.update(2500);
tst.toBeFalse(str.value());

str.update(3000);
tst.toBeTrue(str.value(),"true");

str.update(3999);
tst.toBeTrue(str.value(),"true");

str.update(4000);
tst.toBeFalse(str.value());

//----------------------------------------