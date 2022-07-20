import BaseTest from "./baseTest.js";
import Bilza, { CompFactory as cf } from "../bilza.js";
const bil = new Bilza("bilza");
const tst = new BaseTest("fillRect Test");
const fill = cf.fillRect("green");
tst.toEqual(fill.x.value(), 0);
tst.toEqual(fill.y.value(), 0);
