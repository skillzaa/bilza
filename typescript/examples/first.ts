import Bilzaa2d from "../index.js";
import Grid from "../compscollection/grid.js";
import Text from "../compscollection/text.js";

let b = new Bilzaa2d();

let t = new Text("Alhamdullah, Bilzaa2d finally arrived",100,100);

let t2 = new Text("Some other text else where",20,200);

let a = t2.addAnimation(3);
a.x = 200;
a.fontSize = 100;
let g = new Grid();

b.add_comp(t);
b.add_comp(t2);
b.add_comp(g);
// b.draw();

//****************USEFUL DONT DELETE */
setInterval(function(){
for (let i = 0; i < b.comps.length; i++) {
    // const comp = b.comps[i];
    // comp.x = Math.ceil((Math.random() * 600));
}
b.draw();
},1000);