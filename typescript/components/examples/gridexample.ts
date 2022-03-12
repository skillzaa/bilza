import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Grid from "../containers/grid/grid.js";

let b = new Bilzaa2d();
b.background.color = "#FFF8DC";
let g = new Grid();
g.show_numbers = true;
g.styleNumber.fillStyle = "crimson";
g.styleLine.strokeStyle = "green";
g.styleNumber.fontSize = 14;
// g.styleLine.lineDashGap = 2;
b.add_comp(g);

b.start();

