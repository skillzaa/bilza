import BaseTest from "./baseTest.js";
import Bilza, { CompFactory as cf } from "../bilza.js";
const bil = new Bilza("bilza");
const tst = new BaseTest("fillRect Test");
const fill = cf.fillRect("green");
tst.toMatch(fill.color.value(), "green");
tst.toThrow(() => { fill.contentWidth(); }, "The component is not initialized yet");
bil.insert.alwaysOn(fill);
bil.init();
fill.width.set(50);
tst.toEqual(fill.width.value(), 50);
const wd = (bil.pack.canvasWidth() / 100) * 50;
tst.toEqual(fill.contentWidth(), wd);
fill.responsiveDims = false;
tst.toEqual(fill.contentWidth(), 50);
tst.toEqual(fill.x.value(), 0);
tst.toEqual(fill.y.value(), 0);
fill.x.set(10);
fill.y.set(10);
bil.init();
const checkX = (bil.pack.canvasWidth() / 100) * 10;
const checkY = (bil.pack.canvasHeight() / 100) * 10;
tst.toEqual(fill.x.value(), checkX);
tst.toEqual(fill.y.value(), checkY);
fill.responsiveCoordinates = false;
bil.init();
tst.toEqual(fill.x.value(), 10);
tst.toEqual(fill.y.value(), 10);
