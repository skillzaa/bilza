import BaseTest from "./baseTest.js";
import Bilza, { Ui,CompFactory as cf ,hsl} from "../bilza.js";

const bil  = new Bilza("bilza");
bil.resizeCanvas(1000,500);

const tst = new BaseTest("Non Responsive Test");

const fill = cf.fillRect("green");
//--they already are by default but just to be safe
//---later
// fill.responsiveCoordinates = true;
fill.responsivePadding = false;
fill.responsiveDims =false;

//-------------------Init
tst.toNotThrow(()=>{ fill.contentWidth() });
//----------------------

//--------------WIDTH
//--we can use this before or after init BOTH.
fill.width.set(10);
fill.paddingLeft.set(10);
fill.paddingRight.set(10);
fill.paddingTop.set(10);
fill.paddingBottom.set(10);

bil.insert.add(fill,0,60);
//--we need init before width
bil.init();

//-21-july-2022-Learning -- The contentWidth is correct even without init since width and height are AniNumber AND NOT AniNoPerc class. Also width and height are decided on every call (to default impl of contentWidth and contentHeight inside BaseComponent) using bil.responsiveDims flag
//-this is default behaviour but we can over-ride contentWidth and contentHeight.

//--Remember its contentWidth not compWidth
//--since width is 10
tst.toEqual(fill.contentWidth(),10);

//--since width is 10 2 paddings
tst.toEqual(fill.compWidth(),30);

//--now add border

fill.border.set(10);
tst.toEqual(fill.compWidth(),50);

//--set height and its effect should be visible immediately
fill.height.set(10);
//--remeber its height not width thus its 500px
//height 10% 2*paddings 20 % and border 10pix

//170 since 10% of 500 = 50 so 150 for width, and 2 padding after that add 20pix for 2 borders
tst.toEqual(fill.compHeight(),50);
