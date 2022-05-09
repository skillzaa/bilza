// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("basicUsage",1000,300);
// let txt = bil.add.text(0,600,"John Grishm","#008000",0,0);
// txt.d.flagUseDynResize = false;
// txt.style.fontSize = 47;
// console.log("height",txt.height(bil.pack));
let list = bil.add.list(0,6000,10,10,25);
list.addItem("123456789-123456789");
list.addItem("2222222");
list.addItem("3333333");
list.addItem("4444444");
list.addItem("5555555");
// list.addItem("6666666");
let g = bil.gridTempl.dashed();
// list.d.flagShrinkTofitVertically = true;
list.d.colorFont = "white";
list.d.colorItemBorder = "white";
g.d.flagDrawNumbers = true;
//////////////////////////////////
bil.drawInit();
///////////////////////////////
// setInterval(function(){
// list.d.flagShrinkTofitVertically = !list.d.flagShrinkTofitVertically;
// bil.drawInit();
// },1000);

// let int  = setInterval(function(){
// if (list.d.x > 90){clearInterval(int);}
//     list.d.x += 1;
// bil.drawInit();
// },500);