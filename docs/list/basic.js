// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("basicUsage",1000,300);
// let txt = bil.add.text(0,600,"John Grishm","#008000",0,0);
// txt.d.flagUseDynResize = false;
// txt.style.fontSize = 47;
// console.log("height",txt.height(bil.pack));
let list = bil.add.list(0,6000,0,0,80);
list.addItem("-123456789-123456789");
list.addItem("2222222");
list.addItem("3333333");
list.addItem("4444444");
list.addItem("5555555");
list.addItem("6666666");
let g = bil.gridTempl.dashed();

g.d.flagDrawNumbers = true;
//////////////////////////////////
bil.drawInit();
///////////////////////////////
console.log("list",list);