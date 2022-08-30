import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
import welcome from "./scenes/welcome.js";
let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240, 75, 25));
bil.insert.add(cf.frameCounter(), 0, 20);
const scn = welcome(2, 10, 0);
bil.insert.addScene(scn, 2);
const ui = new Ui(bil);
bil.draw();
