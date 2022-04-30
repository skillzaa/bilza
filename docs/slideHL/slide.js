import Bilza from "../../src/Bilza.js";
import Text from "../../src/components/text/text.js";
import Para from "../../src/components/para/para.js";
import SlideHL from "../../src/components/slideHL/slideHL.js";
let bil = new Bilza("bilza",600,300,95);

bil.add.bgShapes();

////////// Starting 
 
///////////////////////////slide 1
let slide = new SlideHL(0,1000,"bla bla bla","#008000");
//--------------------------

slide.addItem("In the name of Allah most merciful");
slide.addItem("To Allah we belong and to him we return");
slide.addItem("Every thing that lives will taste death");
slide.addItem("Every thing that lives will taste death");

bil.insert(slide);

bil.drawInit();
// bil.start();
////////////////////////////////////////////////////////////////////
