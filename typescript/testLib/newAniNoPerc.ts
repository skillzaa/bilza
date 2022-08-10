import BaseTest from "./baseTest.js";
import Bilza, {AniNumber,AniNoPerc} from "../bilza.js";

const tst = new BaseTest("New AniPerc");
const no = new AniNoPerc(0);
no.set(50);
no.init(true,1000);

tst.toEqual(no.value(),500, "x::");
// tst.toEqual(fill.y.value(),250,"y::");

// tst.toEqual(fill.xAligned() ,500,"xAligned");
// tst.toEqual(fill.yAligned() ,250 , "yAligned");

// tst.toEqual(fill.x.value(),500, "x::");
// tst.toEqual(fill.y.value(),250,"y::");

// //width 100 + 2 padding = 200 + border * 2 = 20
// //height 50 + 2 padding = 100 + border * 2 = 20
// tst.toEqual( fill.compWidth() ,320, "compWidth");
// tst.toEqual( fill.compHeight() ,170, "compHeight");


// fill.xAlign = fill.XAlignOpt.Mid; 
// fill.yAlign = fill.YAlignOpt.Mid; 

// // //since fill.compWidth() = 320/2 -x = 340
// tst.toEqual(fill.xAligned() ,340,"xAligned.Mid");
// //--since fill.compHeight() = 170/2 - y= 165
// tst.toEqual(fill.yAligned() , 165 , "yAligned.Mid");


// fill.xAlign = fill.XAlignOpt.Right; 
// fill.yAlign = fill.YAlignOpt.Bot; 

// // //learning : you have to subtract with width and height of the comp from x and y
// tst.toEqual(fill.xAligned() ,180,"XAlignOpt.Right");
// tst.toEqual(fill.yAligned() ,80 , "YAlignOpt.Bot");
