// import BaseTest from "./baseTest.js";
// import Bilza, { Ui,CompFactory as cf ,hsl} from "../bilza.js";

// const bil  = new Bilza("bilza");
// bil.resizeCanvas(1000,500);

// const tst = new BaseTest("Non Responsive XY");

// const fill = cf.fillRect("green");
// //--they are by default true
// fill.responsivePadding = false;
// fill.responsiveDims =false;
// //-----------------
// fill.responsiveCoordinates = false;

// //--------------WIDTH
// //--we can use this before or after init BOTH.
// fill.width.set(10);
// fill.x.set(50);
// fill.y.set(50);
// fill.paddingLeft.set(10);
// fill.paddingRight.set(10);
// fill.paddingTop.set(10);
// fill.paddingBottom.set(10);

// fill.border.set(10);

// bil.insert.add(fill,0,60);

// bil.init();


// tst.toEqual(fill.x.value(),50, "x::");
// tst.toEqual(fill.y.value(),50,"y::");

// tst.toEqual(fill.xAligned() ,50,"xAligned");
// tst.toEqual(fill.yAligned() ,50 , "yAligned");

// fill.xAlign = fill.XAlignOpt.Mid; 
// fill.yAlign = fill.YAlignOpt.Mid; 

// tst.toEqual(fill.x.value(),50, "x::");
// tst.toEqual(fill.y.value(),50,"y::");

// //width 10 + 2oadding =20 + border * 2 = 20
// tst.toEqual( fill.compWidth() ,50, "compWidth");

// //25 since fill.compWidth() =50/2 = 25
// tst.toEqual(fill.xAligned() ,25,"xAligned");
// tst.toEqual(fill.yAligned() ,25 , "yAligned");


// fill.xAlign = fill.XAlignOpt.Right; 
// fill.yAlign = fill.YAlignOpt.Bot; 

// //learning : you have to subtract with width and height of the comp from x and y
// tst.toEqual(fill.xAligned() ,0,"XAlignOpt.Right");
// tst.toEqual(fill.yAligned() ,0 , "YAlignOpt.Bot");
