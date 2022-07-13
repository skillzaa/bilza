import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
import Paragraph from "./container/paragraph.js";

let bil = new Bilza("bilza",70);
bil.background.color.set("#383877");
// bil.insert.alwaysOn(cf.grid("grey"));
// bil.set.loadSystemBackground = false;
// bil.background.color.set("green");
//-----------------------------------------
const para = cf.paragraph();
para.addRow("What you seek is seeking you.");
para.addRow("Words are a pretext.");
para.addRow("I know you're tired but come,");
para.addRow("this is the way.");

bil.insert.add(para,0,30);
//---------------------------------
para.border.set(0);
para.x.setInitValue(50);
para.y.setInitValue(50);
para.rowGap.set(30);
para.padding.set(20);
para.opacityBackground.set(80);
para.colorBackground.set("#EFEEE3")
para.colorBorder.set("blue")
para.xAlign = para.XAlignOpt.Mid;
para.yAlign = para.YAlignOpt.Mid;
//---------------------------------
// para.uniformFontSize.set(true);
para.fontSize.set(30)
// para.setFontSize(20);
// para.fontSize.animate(2,6,60,20);
// para.x.vibrate(0,30,50,1,40);
// para.y.vibrate(0,30,50,1,40);
para.x.oscillate(0,30,50,60,20);
// para.rowGap.animate(3,5,2,30);
// para.x.animate(0,2,0,50);
// para.y.animate(0,2,0,50);
//---------------------------------

const firstRow = para.getRow(0);
firstRow.paddingTop.set(20);
firstRow.paddingBottom.set(20);
firstRow.colorBackground.set("#896c16");
firstRow.setFontColor("blue");


const first = para.getCell(0,2);
first.colorBackground.set("red");
first.fontSize.set(70);
first.color.set("blue");
// first.paddingTop.set(10);
first.showBackground.set(true);

const second = para.getCell(1,2);
second.colorBackground.set("green");
second.color.set("blue");
second.showBackground.set(true);

const third = para.getCell(2,2);
third.colorBackground.set("yellow");
third.color.set("blue");
third.showBackground.set(true);

const ui = new Ui(bil);
bil.draw(2000);


