//convertToCompiledLib
import Bilza from "../src/Bilza.js";

let bil = new Bilza("bilza",800,null,60);
bil.dynamicCanvas(90);
let g = bil.gridTempl.dashed();
let c = bil.add.counter();
bil.start();
console.log("ok");