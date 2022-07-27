import Bilza, { Ui,CompFactory as cf,hsl,SpriteSheets } from "./bilza.js";
import SpriteSheetIrregular from "./components/spriteSheetIrregular/spriteSheetIrregular.js";

let bil = new Bilza("bilza", 70);

//-----

const fc = cf.frameCounter();
fc.goto(0,70,0)
bil.insert.alwaysOn(fc);

//-----

const grid = cf.grid(hsl(240,100,20));
bil.insert.alwaysOn(grid);

const ss = new SpriteSheetIrregular("../images/ghosts.png");
bil.insert.add(ss,0,60);

ss.y.set(50);
ss.x.animate(2,10,0,70);

ss.gotoImage(3,"nurse");
ss.gotoImage(5,"cop");
ss.gotoImage(7,"santa");
ss.gotoImage(9,"queen");
ss.gotoImage(11,"punk");
ss.gotoImage(13,"checker");
ss.gotoImage(15,"stripes");
ss.gotoImage(17,"glasses");

// ss.currentImage.goto(2,1);
// ss.currentImage.goto(4,2);
// ss.currentImage.goto(6,3);
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////

