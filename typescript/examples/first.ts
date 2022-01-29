import Bilzaa2d from "../index.js";
import Grid from "../compscollection/grid.js";
import Text from "../compscollection/text.js";

let b = new Bilzaa2d();

let t = new Text("Alhamdullah, Bilzaa2d finally arrived",100,100);
t.ctxData.fontSize = 70;
t.ctxData.fillStyle = "#ff0000"
b.add_comp(t);

let g = new Grid();
b.add_comp(g);

b.draw(0,0);