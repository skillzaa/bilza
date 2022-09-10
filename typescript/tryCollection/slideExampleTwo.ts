
import Bilza, {Ui, CompFactory as cf,hsl,getRandom,Scene} from "../bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,55,70));

//-------------------
const slide = cf.slide(1,20,240);
slide.addCanvasBorder();
slide.addFrameCounter();
slide.addH1("Main Heading");

slide.addGpHdg("First Group Heading",2,0,5,25,30);
slide.addBltPt("First Group content",3,0,50,45,30);

slide.addGpHdg("Second Group Heading",5,0,5,70,120);
slide.addBltPt("Second Group content",6,0,50,90,120);


bil.insert.addScene(slide);
//-------------------
const ui = new Ui(bil);
bil.draw();

