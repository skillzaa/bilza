
import Bilza, {Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,55,70));

//-------------------
const slide = cf.slide(2,20,240);
slide.addCanvasBorder();
slide.addFrameCounter();
slide.addH1("Heading 01",1,0,50,3);
slide.addBltPt("This is the first bullet point",7,0,50,30);


bil.insert.addScene(slide);
//-------------------
const ui = new Ui(bil);
bil.draw();

