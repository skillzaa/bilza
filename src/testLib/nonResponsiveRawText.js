import BaseTest from "./baseTest.js";
import Bilza, { CompFactory as cf } from "../bilza.js";
const bil = new Bilza("bilza");
bil.resizeCanvas(1000, 500);
const tst = new BaseTest("Non Responsive Raw Text");
const fill = cf.rawText("Non Responsive Raw Text");
fill.responsivePadding = false;
fill.responsiveDims = false;
fill.responsiveCoordinates = false;
fill.x.set(50);
fill.y.set(50);
fill.width.set(50);
fill.height.set(10);
fill.paddingLeft.set(10);
fill.paddingRight.set(10);
fill.paddingTop.set(10);
fill.paddingBottom.set(10);
fill.border.set(10);
bil.insert.add(fill, 0, 60);
bil.init();
tst.toEqual(fill.x.value(), 50, "x::--");
tst.toEqual(fill.y.value(), 50, "y::");
tst.toEqual(fill.xAligned(), 50, "xAligned");
tst.toEqual(fill.yAligned(), 50, "yAligned");
console.log("??????", fill.contentWidth());
const wd = fill.contentWidth();
