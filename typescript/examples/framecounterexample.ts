import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import FrameCounter from "../corecomps/frameCounter/frameCounter.js";
import dashedGrid from "../customTemplates/gridTemplates/dashedGrid.js";


let b = new Bilzaa2d();
b.background.color = "#e0f9f1";
let g = dashedGrid();
b.add_comp(g);
let fc = new FrameCounter();
fc.x = 10;
fc.y = 30;

fc.styleNumbers.fontSize = 30;
b.add_comp(fc);


b.start();

