import Duration from "../insert/duration.js";
import BaseTest from "./baseTest.js";
let dur = new Duration();
let tst = new BaseTest("Bilza Duration");
tst.toEqual(dur.len(), 0);
tst.toEqual(dur.extend(10), 10);
tst.toEqual(dur.len(), 10);
