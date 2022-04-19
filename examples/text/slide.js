import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",800,300,60);
bil.dynamicCanvas(90,90);
let c = bil.add.counter();
c.d.y = 300;2
let r = bil.add.bgShapes();
/////////////////////////
let slide = bil.add.slideHL("The is the Title should heat",5,25); 
slide.addItem("this is fist item which i am talking which i am talkingwhich i am talking  which i am talking ",true,5);
slide.addItem("this is second item ",true,10);
slide.addItem("this is third item",true,15);
///////////////////////////////////////////////////////////

bil.start();
