import Bilza from "../Bilza.js";

let bil = new Bilza("bilza", 1000, 500, 1000);
// let g = bil.add.gridTempl.simple("red");
let g = bil.add.gridTempl.dashed();

g.d.flagDrawNumbers = true;
g.d.fontSize = 12;

let txt = bil.add.text("This is new problem that i have","green",
50,10,695);
txt.d.heightPercent = 10;
txt.d.padding = 5;
txt.d.margin = 5;
txt.d.colorBg = "pink";
txt.shadowsOff();
bil.draw();

