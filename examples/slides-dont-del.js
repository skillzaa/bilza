//convertToCompiledLib
import Bilza from "../src/Bilza.js";
import slide01 from "../src/assets/slide01.js";
import slide02 from "../src/assets/slide02.js";

let bil = new Bilza("bilza",800,null,20);
bil.dynamicCanvas(90);

bil.insert(slide01());
bil.insertAt(slide02(),15);

let g = bil.gridTempl.dashed();
let c = bil.add.counter();
bil.start();
console.log("ok");