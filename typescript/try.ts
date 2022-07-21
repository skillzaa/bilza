import Bilza, { Ui,CompFactory as cf } from "./bilza.js";


let bil = new Bilza("bilza",70);
//-----------------------------------------
const row = cf.row("This is a miracle");

// row.xAlign = row.XAlignOpt.Right;
// row.yAlign = row.YAlignOpt.Bot;

bil.insert.alwaysOn(cf.grid());

row.goto(0,20,20);
bil.insert.add(row,0,50);
// // //--------------------------------------------
const cell02 = row.getCell(1);
// // cell02.content.set("milk");
cell02.showBackground.set(true);
cell02.colorBackground.set("pink");
// cell02.colorBackground.random(2,10,20);
cell02.color.random(2,10,20);
//--------------------------------------------
row.x.animate(2,10,50,100);
// row.y.animate(2,10,20,100);
const ui = new Ui(bil);
bil.draw();

// // console.log(bil.comps);

