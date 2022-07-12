import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
import Paragraph from "./container/paragraph.js";

let bil = new Bilza("bilza",70);

bil.insert.alwaysOn(cf.grid("grey"));
// bil.set.loadSystemBackground = false;
// bil.background.color.set("green");
//-----------------------------------------
const tbl = cf.paragraph();
tbl.addRow("This is first row");
tbl.addRow("This is second row");
tbl.addRow("This is third row");

bil.insert.add(tbl,0,30);
//---------------------------------
tbl.border.set(5);
tbl.y.setInitValue(5);
tbl.padding.set(20);
tbl.opacityBackground.set(50);
tbl.colorBackground.set("blue")
tbl.colorBorder.set("blue")
tbl.xAlign = tbl.XAlignOpt.Mid;
tbl.yAlign = tbl.YAlignOpt.Mid;
//---------------------------------
tbl.rowGap.animate(3,5,2,30);
tbl.x.animate(0,2,0,50);
tbl.y.animate(0,2,0,50);
//---------------------------------

const first = tbl.getCell(0,2);
first.colorBackground.set("red");
first.color.set("blue");
first.showBackground.set(true);

const second = tbl.getCell(1,2);
second.colorBackground.set("green");
second.color.set("blue");
second.showBackground.set(true);

const third = tbl.getCell(2,2);
third.colorBackground.set("yellow");
third.color.set("blue");
third.showBackground.set(true);

const ui = new Ui(bil);
bil.draw();


