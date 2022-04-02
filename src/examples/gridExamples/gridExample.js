import Bilza from "../../Bilza.js";
let bil = new Bilza("bilza", 800, 300, 1000);
let g = bil.add.gridTempl.simple("red");
g.d.flagDrawNumbers = true;
g.d.fontSize = 12;
bil.dynamicResizing = true;
let rec = bil.add.rectangle();
rec.d.width = 400;
rec.d.widthPercent = 50;
rec.d.heightPercent = 33;
rec.d.x = 0;
rec.d.y = 33;
bil.draw();
setInterval(function () {
    bil.setCanvas(400, 150);
    bil.draw();
}, 3000);
