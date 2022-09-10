
import Bilza, {Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,55,70));

//-------------------
const slide = cf.slide(1,20,240);
slide.addCanvasBorder();
slide.addFrameCounter();
slide.addH1("Main Heading");

slide.addGpHdg("First Group Heading",2,0,5,25,0);
slide.addBoldLine("First content",4,0,5,45,0);
slide.addBoldLine("Third content",6,0,5,65,0);
slide.addBoldLine("Fifth content",8,0,5,85,0);

slide.addGpHdg("Second Group Heading",2.5,0,50,25);
slide.addBoldLine("Second content",5,0,50,45);
slide.addBoldLine("Fourth content",7,0,50,65);
slide.addBoldLine("Sixth content",9,0,50,85);

bil.insert.addScene(slide);
//-------------------
const ui = new Ui(bil);
bil.draw();

