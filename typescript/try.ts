import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

///////////////////////////////////////////////////
///////////////////////////////////////////////////
const bil = new Bilza("bilza");
bil.background.color.set(hsl(60,30,85));
bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);
//----------------------------------------------//
const grid = bil.alwaysOn().grid();

bil.lineShapes.add(0,10).triangle(120,true).sexy(10);
bil.lineShapes.add(0,10).starOfDavid(300,true).setxy(30,60);
bil.lineShapes.add(0,10).cross(180,true).sexy(30,20);
// bil.lineShapes.add(0,10).tickRight("green",10).sexy(60,10);
// bil.lineShapes.add(0,10).tickLeft("red",10).sexy(75,10);
// bil.lineShapes.add(0,10).graphInc("green",5).sexy(5,30);
// bil.lineShapes.add(0,10).rectangle("green",5).sexy(5,30);
// bil.lineShapes.add(0,10).rightTriangle("red",5).sexy(25,10);
//--------------------------------------
// starOfDavid(lines);
////////////////////////
bil.draw();
// bil.resizeCanvas(800,400);
console.log("bil",bil);

//@ts-expect-error
const ui = new Ui(bil.bil );

