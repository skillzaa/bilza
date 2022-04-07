import Bilza from "../../Bilza.js";
let bil = new Bilza("bilza", 0, 0);
let g = bil.add.gridTempl.dashed();
g.d.flagDrawNumbers = true;
let counter = bil.add.counter();
counter.d.x = 600;
counter.d.y = 250;
let list = bil.add.list(0, 0, 55, 0, 25000);
list.addItem("This is first");
list.addItem("This is second");
list.addItem("This is third");
list.addItem("This is fourth");
bil.start();
setInterval(function () {
    bil.setCanvas(400, 150);
}, 10000);
