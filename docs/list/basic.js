// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("basicUsage",800,300);
let list = bil.add.list();
list.addItem("wwwwwwwwwwwwwwwwwwwww");
list.addItem("xxxxxxxxxxxxxxxxxxxxxxxxxx");
list.addItem("yyyyyyyyyyyyyyyyyyyy");
list.addItem("zzzzzzzzzzzzzzzzzzzzzz");
let g = bil.gridTempl.dashed();


//////////////////////////////////
bil.draw();
///////////////////////////////
console.log("list",list);