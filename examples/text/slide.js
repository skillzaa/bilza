import Bilza from "../../src/Bilza.js";
// import CompFactory from "../../src/compFactory/compFactory.js";
import SlideHL from "../../src/components/slideHL/slideHL.js";

let bil = new Bilza("bilza",800,300,60);
bil.dynamicCanvas(90,90);
let c = bil.add.counter();
c.d.y = 300;
/////////////////////////
let slide = new SlideHL("The is the Title should heat",5,25); 

slide.addItem("this is fist item which i am talking which i am talkingwhich i am talking  which i am talking ",true,5);
slide.addItem("this is second item ",false,10);
slide.addItem("this is third item",true,15);
// slide.unDimSeq(0,5000);
// slide.unDimSeq(1,10000);
// slide.unDimSeq(2,15000);
//--
// slide.unDimSeq(0,20000);
// slide.unDimSeq(1,25000);
// slide.unDimSeq(2,30000);
///known Error :: eek bar undim hoojai then dim nahi hoota
// slide.dimSeq(0,35000);
// slide.dimSeq(1,40000);
// slide.dimSeq(2,45000);

///////////////////////////////////////////////////////////

bil.insert(slide);
bil.start();
