//convertToCompiledLib
import Bilza from "../src/Bilza.js";
import slide01 from "../src/assets/slide01.js";
import slide02 from "../src/assets/slide02.js";

let bil = new Bilza("bilza",800,null,20);
bil.dynamicCanvas(90);

// bil.insert(slide01());
// bil.insertAt(slide02(),15);

let g = bil.gridTempl.dashed();
let c = bil.add.counter();
c.d.x = 10;
c.d.y = 400;
let txt = bil.textTempl.test();
let txt02 = bil.textTempl.title(10,20);
bil.start();
console.log("ok");