import Bilza, {IComponent, Ui, CompFactory as cf, hsl} from "./bilza.js";
import heightWidthGrowShrink from "./aniPresets/heightWidthGrowShrink.js";
let bil = new Bilza("bilza", 70);

const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);

const comp = cf.staticGrid(60,60,hsl(240));

comp.showNumbers.set(true);
comp.colorNumbers.set(hsl(0));
//---------------
heightWidthGrowShrink(comp);

bil.insert.add(comp, 0, 65);
const ui = new Ui(bil);
bil.draw();