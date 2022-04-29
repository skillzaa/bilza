// import Bilza from "../../build/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("basicUsage",800,300);
let list = bil.add.list();
list.addItem("wwwwwwwwwwwwwwwwwwwwwwwzz");
list.addItem("xxxxxxxxxxxx");
list.addItem("yyyyyyyyyyyyyyyyyyyyyyyyyy");
list.addItem("zzzzzzzzzzzzzzzzzzzzzzzzzz");
let g = bil.gridTempl.dashed();


//////////////////////////////////
bil.drawInit();
///////////////////////////////
console.log("list",list);