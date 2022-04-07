import Bilza from "../Bilza.js";
let bil = new Bilza("bilza", 1000, 500, 1000);
let g = bil.add.gridTempl.simple("red");
g.d.flagDrawNumbers = true;
g.d.fontSize = 12;
let txt = bil.add.txt("This is Title Of The Lesson?", "green", 25, 10, 50);
txt.d.padding = 10;
txt.d.margin = 10;
txt.shadowsOn();
bil.start();
setInterval(function () {
    txt.shadowsOff();
}, 5000);
