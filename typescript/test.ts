import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
import Row from "./components/row/row.js";

let bil = new Bilza("bilza",70);
// bil.set.loadSystemBackground = false;
// bil.background.color.set("green");
//-----------------------------------------


const row = new Row(["An","Apple","a","day"]);
row.goto(0,1,50);
bil.insert.add(row,0,50);


// const cell01 = row.getCell(0);
// cell01.border.set(1);
// cell01.paddingLeft.setInitValue(8);
// cell01.colorBorder.set("black");
// // //--------------------------------------------
// const cell02 = row.getCell(1);
// // cell02.content.set("milk");
// cell02.showBackground.set(true);
// cell02.colorBackground.set("pink");
// cell02.border.set(1);
// cell02.paddingLeft.setInitValue(10);
// cell02.paddingRight.setInitValue(10);
// cell02.colorBorder.set("green");
//--------------------------------------------
const ui = new Ui(bil);
bil.draw();

// console.log(bil.comps);

