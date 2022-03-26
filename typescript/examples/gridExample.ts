import Bilza from "../index.js";

let bil = new Bilza("bilza",800, 300, 1000);
// bil.add.grid();
// bil.add.gridTempl.dashedGrid("#e8e2a7");
bil.add.gridTempl.simple("#e8e2a7");
// bil.add.counter(0,0,15000);


bil.draw();