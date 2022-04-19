import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",800,300,60);
// bil.setTimeEnd(15);
bil.dynamicCanvas(90,90);

let g = bil.add.rGrid();
let c = bil.add.counter();
c.d.x=0;

let slide = bil.add.slideHnL("The is the Title should heat"); 

slide.setStartTime(10000);

console.log("slide.d.msStart",slide.d.msStart);

slide.addItem("this is fist item which i am talking which i am talkingwhich i am talking  which i am talking ");
slide.addItem("this is second item ");
slide.addItem("this is third item");
bil.start();

slide.dimSeq(0,5000);
slide.dimSeq(1,10000);
slide.dimSeq(2,15000);