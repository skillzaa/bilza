import Bilza, { Ui,CompFactory as cf } from "./Bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
//-----------------------------------------
bil.insert.alwaysOn(cf.frameCounter());

const txt = cf.fillRect("#008000");
txt.goto(0,50,50);
txt.width.set(20);
txt.height.set(20);

txt.rotation.animate(0,20,0,5000);
bil.insert.add(txt,0,20);

const ui = new Ui(bil);
bil.draw();

// setInterval(function(){
// // txt.visible.set(!txt.visible.value());
// txt.rotation.set( txt.rotation.value() + 2 );// += 5; 
// },20);