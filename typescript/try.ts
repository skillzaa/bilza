import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,55,70));

//--------------------
const fc = cf.frameCounter(hsl(120));
bil.insert.alwaysOn(fc);
//..................................
const jt  = cf.scenes.jt(1,5)
//-------------------
const ui = new Ui(bil);
bil.draw();

