import Duration from "../bilzaMod/duration.js";
import BaseTest from "./baseTest.js";
let dur = new Duration();
let tst = new BaseTest();
tst.toEqual(dur.len(), 0);
