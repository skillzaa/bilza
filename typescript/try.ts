import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,55,70));

//--------------------
const fc = cf.frameCounter(hsl(120));
bil.insert.alwaysOn(fc);
//..................................
// const jt  = cf.scenes.jt(1,5,"The Jumbotron",240);
// bil.insert.addScene(jt);
//-------------------
//..................................
// const sjt  = cf.scenes.swingJt(6,10,"The Jumbotron",240);
// bil.insert.addScene(sjt);
//-------------------
// ..................................
// const fsq  = cf.scenes.fourSq(20,30);
// bil.insert.addScene(fsq);
// -------------------
// ..................................
// const esq  = cf.scenes.eightSq(0,20);
// bil.insert.addScene(esq);
// -------------------
// ..................................
const sq  = cf.scenes.canvasBorder(0,10,hsl(240,30,90));
bil.insert.addScene(sq);
// -------------------

//-------------------
const ui = new Ui(bil);
bil.draw();

