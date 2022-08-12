// import BaseTest from "./baseTest.js";
// import Bilza, { Ui,CompFactory as cf ,hsl} from "../bilza.js";

// const bil  = new Bilza("bilza");
// bil.resizeCanvas(1000,500);

// const tst = new BaseTest(" Text Test ");

// const fill = cf.text("Text Test");
// //--they are by default true
// fill.responsivePadding = true;
// fill.responsiveDims =true;
// fill.responsiveCoordinates = true;

// fill.x.set(0); //default bahaviour but for safety
// fill.y.set(0); //default bahaviour but for safety
// fill.width.set(10);
// fill.height.set(10);
// fill.paddingLeft.set(10);
// fill.paddingRight.set(10);
// fill.paddingTop.set(10);
// fill.paddingBottom.set(10);

// fill.border.set(10);

// bil.insert.add(fill,0,60);

// bil.init();
// //--just to run update so that text can be shrunk to 10%
// bil.draw();
// //width (100 + 2 padding = 200 + border * 2 = 20) = 320 incomming 318
// tst.approxEqual( fill.compWidth() ,320,5,"compWidth after draw/update");
// //height 50 + 2 padding = 100 + border * 2 = 170
// //---Height is maxHeight
// tst.isLessThan( fill.compHeight() ,170, "compHeight after draw/update");


// fill.xAlign = fill.XAlignOpt.Mid; 
// fill.yAlign = fill.YAlignOpt.Mid; 
// //--remeber x and y is 0
// //fill.compWidth() = 318 - (318/2 since its Mid) = 159;
// // now 159 - x which is 0 = -159
// tst.toEqual(fill.xAligned() ,-159,"xAligned.Mid");
// //--since fill.compHeight() = 170/2 - 0= -86
// //--since the result is in negative thus use greater than
// tst.isGreaterThan(fill.yAligned() , -86 , "yAligned.Mid");


// fill.xAlign = fill.XAlignOpt.Right; 
// fill.yAlign = fill.YAlignOpt.Bot; 

// // //learning : you have to subtract with width and height of the comp from x and y
// //--x and y = 0 so entire width and height is subtracted
// tst.toEqual(fill.xAligned() ,-318,"XAlignOpt.Right");
// tst.isLessThan(fill.yAligned() ,-86 , "YAlignOpt.Bot");
