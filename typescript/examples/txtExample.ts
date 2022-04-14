import Bilza from "../Bilza.js";

let bil = new Bilza("bilza", 1000, 500,5000);

let g = bil.add.gridTempl.dashed();

g.d.flagDrawNumbers = true;
g.d.fontSize = 12;

// let counter = bil.add.counter();
// counter.d.x = 90;
// counter.d.y = 90;

let txt = bil.add.text("This is the Title","green",
50,10,50);
txt.d.heightPercent = 10;
txt.d.padding = 5;
txt.d.margin = 5;
txt.d.xAlignment = txt.xAlignmentOptions.Mid;
txt.d.colorBg = "#d7edd7";
txt.d.flagDrawMargin = true;
txt.d.flagDrawBg = true;
//////////////////////////////////
let point1 = bil.add.text("This is the point number One","grey",10,35,35);
let point2 = bil.add.text("This is the point number Two","grey",10,55,35);
let point3 = bil.add.text("This is the point number three","grey",10,75,35);

let point1Tr = point1.addTransition(2000);
point1Tr.color = "red";
point1Tr.colorBg = "#d7edd7";

bil.start();
// console.log("bil",bil);
let w = 100;
let h = 100;
setInterval(function(){
    bil.dynamicCanvas(w,h);
    w = w-10;
    h = h-10;
},5000);