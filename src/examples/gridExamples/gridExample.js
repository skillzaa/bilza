import Bilza from "../../Bilza.js";
let bil = new Bilza("bilza", 800, 300, 1000);
let g = bil.add.gridTempl.simple("green");
g.d.flagDrawNumbers = true;
g.d.fontSize = 12;
bil.dynamicResizing = true;
bil.add.line();
let rec = bil.add.fillRect();
rec.d.widthPercent = 50;
rec.d.heightPercent = 33;
rec.d.x = 0;
rec.d.y = 33;
bil.draw();
setInterval(function () {
    bil.setCanvas(400, 150);
    bil.draw();
}, 3000);
