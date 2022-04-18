import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza");
bil.dynamicCanvas(90,90);

// let g = bil.add.rGrid();
let g = bil.add.gridTempl.dashed();
// g.d.flagDrawNumbers = true;
// g.d.fontSize = 14;

let slide = bil.add.slideHnL("The is the Title should heat"); 
slide.addItem("this is fist item which i am talking ");
slide.addItem("this is second item ");
slide.addItem("this is third item");
bil.start();
