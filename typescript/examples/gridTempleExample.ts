import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import dashedGrid from "../components/grid/dashedGrid.js";

let b = new Bilzaa2d();
b.background.color = "#e0f9f1";
let g = dashedGrid();
b.add_comp(g);
b.start();

