import Bilzaa2d from "./src/index.js";
import Grid from "./src/componentsLib/grid.js";

let b = new Bilzaa2d();
let g = new Grid();
b.add_comp(g);

b.draw(0,0);