import Bilza, { Ui, CompFactory as cf } from "./bilza.js";
import scene from "./scene/testScene.js";
let bil = new Bilza("bilza", 70);
bil.insert.add(cf.frameCounter(), 0, 20);
bil.insert.addScene(scene, 5);
const ui = new Ui(bil);
bil.draw();
