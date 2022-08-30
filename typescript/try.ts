import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";
import scene from "./scene/testScene.js";

let bil = new Bilza("bilza",70);


bil.insert.add(cf.frameCounter(),0,20);
//-----------------------------------------

bil.insert.addScene(scene,5);
const ui = new Ui(bil); //not required for this example
bil.draw();
