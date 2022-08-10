import BaseTest from "./baseTest.js";
import Bilza, { CompFactory as cf } from "../bilza.js";

const bil = new Bilza("bilza");
bil.resizeCanvas(1000, 500);

const tst = new BaseTest("Non Responsive XY");

const fill = cf.fillRect("green");
fill.responsivePadding = false;
fill.responsiveDims = false;
fill.responsiveCoordinates = false;
fill.width.set(10);
fill.x.set(50);
fill.y.set(50);
fill.paddingLeft.set(10);
fill.paddingRight.set(10);
fill.paddingTop.set(10);
fill.paddingBottom.set(10);
fill.border.set(10);
bil.insert.add(fill, 0, 60);
bil.init();
tst.toEqual(fill.x.value(), 50, "x::");
tst.toEqual(fill.y.value(), 50, "y::");
tst.toEqual(fill.xAligned(), 50, "xAligned");
tst.toEqual(fill.yAligned(), 50, "yAligned");
fill.xAlign = fill.XAlignOpt.Mid;
fill.yAlign = fill.YAlignOpt.Mid;
tst.toEqual(fill.x.value(), 50, "x::");
tst.toEqual(fill.y.value(), 50, "y::");
tst.toEqual(fill.compWidth(), 50, "compWidth");
tst.toEqual(fill.xAligned(), 25, "xAligned");
tst.toEqual(fill.yAligned(), 25, "yAligned");
fill.xAlign = fill.XAlignOpt.Right;
fill.yAlign = fill.YAlignOpt.Bot;
tst.toEqual(fill.xAligned(), 0, "XAlignOpt.Right");
tst.toEqual(fill.yAligned(), 0, "YAlignOpt.Bot");
