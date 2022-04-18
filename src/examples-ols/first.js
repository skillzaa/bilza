import Bilza from "../Bilza.js";
let bil = new Bilza("bilza");
bil.dynamicCanvas(95, 95);
let g = bil.add.gridTempl.dashed();
bil.add.textTempl.hdg("Longer the Text smaller the font", "#0000ff", null, 50, 5, 100);
bil.add.textTempl.hdg("Red", "#ff0000", "black", 50, 35);
bil.add.textTempl.hdg("Gren", "#008000", "black", 50, 55);
bil.add.textTempl.hdg("Blue", "#0000ff", "black", 50, 75);
bil.start();
