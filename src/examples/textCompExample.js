import Bilza from "../Bilza.js";
let bil = new Bilza("bilza", 800, 300, 1000);
let g = bil.add.gridTempl.simple("red");
g.d.flagDrawNumbers = true;
g.d.fontSize = 12;
bil.add.textComp("ddddddd");
bil.draw();
