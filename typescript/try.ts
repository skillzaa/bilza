import Bilza, { Ui,CompFactory as cf,hsl,SpriteSheets } from "./bilza.js";
import SpriteSheetIrregular from "./components/spriteSheetIrregular/spriteSheetIrregular.js";

let bil = new Bilza("bilza", 70);
bil.resizeCanvas(800,640);
//-----
const fc = cf.frameCounter();
fc.goto(0,70,0)
bil.insert.alwaysOn(fc);


const grid = cf.grid(hsl(240,100,20));
bil.insert.alwaysOn(grid);

const ss = new SpriteSheetIrregular("../images/ghosts.png");
bil.insert.add(ss,0,60);

const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////

