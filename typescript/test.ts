import Bilza, { Ui,CompFactory as cf } from "./Bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
//-----------------------------------------

const txt = cf.fillRect("#008000");
txt.goto(0,50,50);

bil.insert.add(txt,0,200);

const ui = new Ui(bil);
bil.draw();

setInterval(function(){
// txt.visible.set(!txt.visible.value());
txt.rotation += 5; 
},1000);