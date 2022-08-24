import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
import heightWidthGrowShrink from "./aniPresets/heightWidthGrowShrink.js";
let bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const comp = cf.pic("./house.jpg", 40, 40);
heightWidthGrowShrink(comp);
bil.insert.add(comp, 0, 60);
const ui = new Ui(bil);
bil.draw();
