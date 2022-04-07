import Bilza from "../../Bilza.js";
let bil = new Bilza("bilza", 0, 0, 10000);

let g = bil.add.gridTempl.dashed();
g.d.flagDrawNumbers = true;

let counter = bil.add.counter();
counter.d.x = 600;
counter.d.y = 250;


let lines = bil.add.lines(0,10);
lines.d.flagFilled = false;
lines.d.responsive = true;
lines.add(100,10);
lines.add(50,100);

bil.draw();


setInterval(function(){
bil.setCanvas(400,150);
bil.draw();
},10000);