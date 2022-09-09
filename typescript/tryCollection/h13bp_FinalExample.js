import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,55,70));

//--------------------
const fc = cf.frameCounter(hsl(120));
bil.insert.alwaysOn(fc);
//.....................................
const slide = cf.scenes.h13bp(3,25,
    "This is the title",            //--Title content
    "Content of Bullet Point 01",   //--Content BP01
    "Content of Bullet Point 02",   //--Content BP02
    "Content of Bullet Point 03",   //--Content BP03
    "This is a foot note",          //--Content FootNote
    240,                            //--Colors Number
    2,4,6,8                         //--Entry Times
    );
//-------------------
bil.insert.addScene(slide);
//-------------------
const ui = new Ui(bil);
bil.draw();

