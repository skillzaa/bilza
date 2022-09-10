
import Bilza, {Ui, CompFactory as cf,hsl,getRandom,Scene} from "../bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,55,70));

//-------------------
const slide = cf.slide(2,20,240);
slide.addCanvasBorder();
slide.addFrameCounter();
slide.addH1("This is Main Heading",1,0,50,3);
slide.addBltPt("This is the first bullet point",7,0,50,30);
slide.addBltPt("This is the RED bullet point",9,0,50,50,0);
slide.addBltPt("This is the thrid bullet point",11,0,50,70);
//....
slide.addH2("This is H2",2,0,2,85,0);
slide.addH3("This is H3",3,0,25,85,240);
slide.addH4("This is H4",4,0,50,85,180);
slide.addH5("This is H5",5,0,75,85,300);
bil.insert.addScene(slide);
//-------------------
const ui = new Ui(bil);
bil.draw();

