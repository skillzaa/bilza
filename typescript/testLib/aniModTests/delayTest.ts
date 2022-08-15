import BaseTest from "../baseTest.js";
import Delay from "../../animationModule/filters/delay.js";

const tst = new BaseTest(" Delay Test ");
const delay = new Delay(5000);
// console.log(delay);

tst.toBeTrue(delay.isSegChanged(10000),"delay.isSegChanged(10000)-first try");
tst.toBeFalse(delay.isSegChanged(14000),"delay.isSegChanged(14000)");
tst.toBeTrue(delay.isSegChanged(15000),"delay.isSegChanged(15000)");


///-----------now try jumbled by reverse frames
const delay02 = new Delay(5000);
tst.toBeTrue(delay02.isSegChanged(10000),"delay.isSegChanged(10000)-first try");
tst.toBeTrue(delay02.isSegChanged(8000),"delay.isSegChanged(10000)-first try");
