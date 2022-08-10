import BaseTest from "./baseTest.js";
import Bilza, {AniNumber,AniNoPerc } from "../bilza.js";

const tst = new BaseTest("Responsive XY");

const aniPerc = new AniNoPerc(0);
aniPerc.set(50);
aniPerc.init(true,1000);

tst.toEqual(aniPerc.value(), 500, "val=0");


// tst.toEqual(fill.y.value(), 50, "y::");
// tst.toEqual(fill.xAligned(), 50, "xAligned");
// tst.toEqual(fill.yAligned(), 50, "yAligned");
// fill.xAlign = fill.XAlignOpt.Mid;
// fill.yAlign = fill.YAlignOpt.Mid;
// tst.toEqual(fill.x.value(), 50, "x::");
// tst.toEqual(fill.y.value(), 50, "y::");
// tst.toEqual(fill.compWidth(), 50, "compWidth");
// tst.toEqual(fill.xAligned(), 25, "xAligned");
// tst.toEqual(fill.yAligned(), 25, "yAligned");
// fill.xAlign = fill.XAlignOpt.Right;
// fill.yAlign = fill.YAlignOpt.Bot;
// tst.toEqual(fill.xAligned(), 0, "XAlignOpt.Right");
// tst.toEqual(fill.yAligned(), 0, "YAlignOpt.Bot");
