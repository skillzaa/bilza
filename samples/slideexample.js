import Bilza from "../../src/Bilza.js";
import Text from "../../src/components/text/text.js";
import Para from "../../src/components/para/para.js";
import SlideHL from "../../src/components/slideHL/slideHL.js";
let bil = new Bilza("bilza",10,300,12);
bil.dynamicCanvas(90);
bil.add.counter(0,90,60000);
bil.add.bgShapes();

////////// Starting 
///////////////////////////slide 1
let slide = new SlideHL(0,10,"This is the Heading","#008000");
//--------------------------
slide.list.d.dimList = [1,2,3];
slide.addItem("In the name of Allah most merciful");
slide.addItem("To Allah we belong and to him we return");
slide.addItem("Every thing that lives will taste death");
slide.addItem("Free will is restricted between Birth and Death");

bil.insert(slide);

// bil.drawInit();
bil.start();
////////////////////////////////////////////////////////////////////
let counter = 0;
let inter = setInterval(function(){
    if (counter > 3){clearInterval(inter);}
slide.list.d.highlightList.push(counter++);
bil.drawInit();
},2000);