import Bilza from "../../Bilza.js";
let bil = new Bilza("bilza", 800, 300, 1000);
let g = bil.add.gridTempl.simple("red");
g.d.flagDrawNumbers = true;
g.d.fontSize = 12;

/////-------======---///
let rec = bil.add.rectangle();
rec.d.width = 390;
rec.d.x = 0;
rec.d.y = 50;

bil.draw();


setInterval(function(){
bil.setCanvas(400,300);
rec.d.width = 200;
bil.draw();
},3000);