import Bilza from "../index.js";

let bil = new Bilza("bilza",600, 1200, 1000);
// bil.add.grid(0,15000);
// bil.add.counter(0,0,15000);
bil.add.text("Bilza Text Templates", "black",40, 0, bil.getTimeEnd(), 50, 20);

bil.add.textTempl.shadowRect("Bilza.js",0,20000,"red","red",80);
bil.draw();