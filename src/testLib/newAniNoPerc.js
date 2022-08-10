import BaseTest from "./baseTest.js";
import { AniNoPerc } from "../bilza.js";
const tst = new BaseTest("New AniPerc");
const no = new AniNoPerc(0);
no.set(50);
no.init(true, 1000);
tst.toEqual(no.value(), 500, "x::");
