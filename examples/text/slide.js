import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza");
bil.dynamicCanvas(90,90);

// let g = bil.add.gridTempl.dashed();
let g = bil.add.rGrid();
let c = bil.add.counter();
c.d.x=0;

let slide = bil.add.slideHnL("The is the Title should heat"); 
slide.d.msStart = 2000;

slide.addItem("this is fist item which i am talking which i am talkingwhich i am talking  which i am talking ");
slide.addItem("this is second item ");
slide.addItem("this is third item");
bil.start();

slide.dimSeq(0,3);
slide.dimSeq(1,6);
slide.dimSeq(2,9);
