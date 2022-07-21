import BaseTest from "./baseTest.js";
import Bilza, { Ui,CompFactory as cf ,hsl} from "../bilza.js";

const bil  = new Bilza("bilza");
const tst = new BaseTest("fillRect Test");

const fill = cf.fillRect("green");
//-------------------Basics
tst.toBe(fill.color.value() , "green");

//-------------------Init
tst.toThrow(()=>{ fill.contentWidth() },"The component is not initialized yet");
//----------------------
bil.insert.alwaysOn(fill);
bil.init();
//--we need init before width

//--------------WIDTH
//--we can use this before or after init BOTH.
fill.width.set(50);
tst.toEqual(fill.width.value() , 50);
//@ts-expect-error
const wd = (bil.pack.canvasWidth() /100) * 50; 
tst.toEqual(fill.contentWidth(), wd );
//--now result should be 50 only
fill.responsiveDims = false;
tst.toEqual(fill.contentWidth(), 50);
//-------------------------------

//---coordinates
//--check default = 0
tst.toEqual(fill.x.value(),0);
tst.toEqual(fill.y.value(),0);

fill.x.set(10);
fill.y.set(10);

bil.init();
//@ts-expect-error
const checkX = (bil.pack.canvasWidth() /100) * 10; 
//@ts-expect-error
const checkY = (bil.pack.canvasHeight() /100) * 10; 

tst.toEqual(fill.x.value(),  checkX );
tst.toEqual(fill.y.value(),  checkY );

//-----This needs to be set before init since then it is handed over to AniNoPerc class which save this in its own variable; 
fill.responsiveCoordinates = false;
bil.init();
tst.toEqual(fill.x.value(),10);
tst.toEqual(fill.y.value(),10);



