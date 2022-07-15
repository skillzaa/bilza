import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
// import Paragraph from "./container/paragraph.js";

let bil = new Bilza("bilza",70);
bil.resizeCanvas(300,300);
// bil.background.color.set("grey");
// bil.set.disableOpacity();

bil.insert.alwaysOn(cf.staticGrid(50,50,"green"));
// debugger;
const rect = cf.fillRect("red");
rect.goto(0,50,50);

// rect.xAlign = rect.XAlignOpt.Mid;
// rect.yAlign = rect.YAlignOpt.Mid;
// rect.opacity.set(25);
// rect.opacity.oscillate(1,30,0,100,1);
rect.showBackground.set(true);
rect.colorBackground.set("pink");
rect.border.set(2);
// rect.lineWidth.set(0);
rect.border.animate(0,5,0,50);
// rect.border.set(20);
// rect.rotation.animate(0,10,0,2000);
// rect.border.animate(0,5,0,30);
// rect.lineWidth.animate(0,5,0,10);
rect.width.set(20);
// rect.paddingLeft.set(30);
// rect.paddingLeft.animate(0,5,0,30);
// rect.paddingRight.animate(6,10,0,30);
// rect.paddingTop.animate(11,15,0,30);
// rect.paddingBottom.animate(16,20,0,30);
// rect.colorBorder.set("blue");
bil.insert.add(rect,0,60);

const ui = new Ui(bil);
bil.draw();

// // bil.set.loadSystemBackground = false;
// // bil.background.color.set("green");
// //-----------------------------------------
// debugger;
// const para = cf.paragraph();
// para.addRow("What you seek is seeking you.");
// para.addRow("I know you're tired but come,");
// para.addRow("this is the way.");

// bil.insert.add(para,0,30);
// //---------------------------------
// para.border.set(0);
// para.x.set(50);
// para.y.set(50);
// para.rowGap.set(30);
// para.padding.set(20);
// para.opacityBackground.set(80);
// para.colorBackground.set("#EFEEE3")
// para.colorBorder.set("blue")
// para.xAlign = para.XAlignOpt.Mid;
// para.yAlign = para.YAlignOpt.Mid;
// //---------------------------------
// // para.uniformFontSize.set(true);
// para.fontSize.set(30)

// para.x.vibrate(0,30,50,1,40);
// para.y.vibrate(0,30,50,1,40);
// //---------------------------------

// const firstRow = para.getRow(0);
// firstRow.paddingTop.set(20);
// firstRow.paddingBottom.set(20);
// firstRow.colorBackground.set("#896c16");
// firstRow.setFontColor("blue");

// const secondRow = para.getRow(1);
// secondRow.colorBackground.set("red");
// secondRow.paddingTop.set(20);
// secondRow.paddingBottom.set(20);

// const thirdRow = para.getRow(2);
// thirdRow.paddingTop.set(20);
// thirdRow.paddingBottom.set(20);
// thirdRow.colorBackground.set("pink");

// const word_Seek = para.getCell(0,2);
// word_Seek.colorBackground.set("red");
// word_Seek.fontSize.set(70);
// word_Seek.color.set("blue");
// word_Seek.showBackground.set(true);

// //-------------------------------------------
// const word_come = para.getCell(1,5);
// word_come.colorBackground.set("yellow");
// word_come.color.set("blue");
// word_come.showBackground.set(true);

// const word_way = para.getCell(2,3);
// word_way.colorBackground.set("green");
// word_way.color.set("yellow");
// word_way.showBackground.set(true);



