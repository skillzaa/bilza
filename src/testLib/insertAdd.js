import BaseTest from "./baseTest.js";
import Bilza from "../bilza.js";
const bil = new Bilza("bilza");
const tst = new BaseTest("Insert Add");
tst.toEqual(bil.len(), 0);
tst.toThrow(() => { bil.add(1, 0).grid(); }, "for Add operation to succeed you need component duration greater than 0");
