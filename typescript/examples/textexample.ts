
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Text from "../corecomps/text/text.js";


let b = new Bilzaa2d();

let f = new Text();
f.compData.data.x = 10;
f.compData.data.y = 10;

f.style.fillStyle = "crimson";
f.style.fontSize = 50;


// let data_trans = f.newDataTransition(5);
// data_trans.content = "New York";
let trans = f.compData.add(3);
trans.content = "New York";
let trans6 = f.compData.add(6);
trans6.x = 30;
// trans

b.add_comp(f);

console.log("b",b);

b.start();