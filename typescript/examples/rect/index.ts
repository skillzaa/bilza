import Bilza from "../../Bilza.js";
let bil = new Bilza("bilza", 500, 500);

let g = bil.add.gridTempl.dashed();
g.d.flagDrawNumbers = true;

let counter = bil.add.counter();
counter.d.x = 600;
counter.d.y = 250;


let rect = bil.add.rect();
// rect.d.heightPercent = 10;
// rect.d.widthPercent = 10;
bil.start();


// setInterval(function(){
// bil.setCanvas(400,150);
// // bil.draw();
// },10000);