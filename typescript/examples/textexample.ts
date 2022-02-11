
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Text from "../corecomps/text/text.js";


let b = new Bilzaa2d();

let f = new Text();
f.compData.data.x = 10;
f.compData.data.y = 10;

f.style.fillStyle = "brown";
f.style.fontSize = 22;

let tr = f.newStyleTransition();
tr.frameStart = 1;
tr.fontSize = 230;
tr.fillStyle = "red";

// let data_trans = f.newDataTransition(5);
// data_trans.content = "New York";
let trans = f.compData.add(3);
trans.content = "New York";
// trans

b.add_comp(f);

console.log("b",b);

b.start();