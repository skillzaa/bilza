import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
import Paragraph from "./container/paragraph.js";

let bil = new Bilza("bilza",70);
// bil.set.loadSystemBackground = false;
// bil.background.color.set("green");
//-----------------------------------------
const tbl = new Paragraph();
tbl.addRow("This is first row");
tbl.addRow("This is second row");
tbl.addRow("This is third row");
bil.insert.add(tbl,0,50);
// // //--------------------------------------------
const first = tbl.getCell(0,2);
first.colorBackground.set("pink");
first.showBackground.set(true);

tbl.rowGap.animate(0,2,2,30);
// row.y.animate(2,10,20,100);
const ui = new Ui(bil);
bil.draw();

// console.log(bil.comps);

