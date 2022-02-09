import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Grid from "../corecomps/grid/grid.js";

let b = new Bilzaa2d();
b.background.color = "#e0f9f1";
let g = b.components.addGrid();
g.show_numbers = true;

b.start();

