import Bilza from "../../Bilza.js";
let bil = new Bilza("bilza", 500, 500);
let g = bil.add.gridTempl.dashed();
g.d.flagDrawNumbers = true;
let counter = bil.add.counter();
counter.d.x = 600;
counter.d.y = 250;
let rect = bil.add.rect();
bil.start();
