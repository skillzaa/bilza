import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",500,300);
// bil.dynamicCanvas(90,90);

let g = bil.add.rGrid();
g.d.flagDrawNumbers = true;
g.d.fontSize = 14;

let slide = bil.add.slideHnL("The is the Title should heat happened to keeping it with in the limit of"); 
slide.addItem("this is fist item which i am talking about in the name of");
slide.addItem("this is second item asdf vfnbg fjkdsd rgl;ks lskf;ls lskflks slfksldkf xc,mcvslkdfvsl");
slide.addItem("this is third item");
bil.start();
