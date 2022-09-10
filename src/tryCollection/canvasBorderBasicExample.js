import Bilza, { Ui, hsl } from "../bilza.js";
import CanvasBorder from "../components/canvasBorder.js";
let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240, 55, 70));
const cb = new CanvasBorder(hsl(240), 25);
cb.borderWidth.animate(2, 2.5, 20, 1);
bil.insert.add(cb, 0, 20);
const ui = new Ui(bil);
bil.draw();
