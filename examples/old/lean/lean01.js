import Bilza from "../../build/Bilza_lean_01.js";
import CompFactory from "../../src/compFactory/compFactory.js";

let bil = new Bilza("bilza", 800, 300, 1000);
let cf = new CompFactory();

let g = cf.gridTempl.simple("red");
g.d.flagDrawNumbers = true;
g.d.fontSize = 12;

bil.insert(g);
bil.draw();

setInterval(function () {
    bil.setCanvas(400, 150);
    bil.draw();
}, 3000);
