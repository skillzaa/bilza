import CompRaw from "../component/rawComp/CompRaw.js";

import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";


let b = new Bilzaa2d();

let f = new CompRaw();
f.compData.x = 100;
f.compData.y = 100;
let tr = f.newStyleTransition();
tr.frameStart = 4;
tr.fontSize = 230;
tr.fillStyle = "red";


let data_trans = f.newDataTransition(5);
data_trans.content = "New York";

b.add_comp(f);

console.log("b",b);

b.start();