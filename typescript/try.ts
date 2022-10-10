import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

///////////////////////////////////////////////////
///////////////////////////////////////////////////
const bil = new Bilza("bilza");
bil.background.color.set(hsl(60,30,85));
bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);
//----------------------------------------------//
const grid = bil.alwaysOn().grid();


const lineSeg = bil.lineShapes.add(0,60).starOfDavid(60,true,5);
lineSeg.setxy(0,0);

lineSeg.x.animate(0,5,   0,                    lineSeg.rightEdge() );
lineSeg.y.animate(6,10,  0,                    lineSeg.bottomEdge() );
lineSeg.x.animate(11,15, lineSeg.rightEdge() ,  0 );
lineSeg.y.animate(16,20, lineSeg.bottomEdge() , 0);

lineSeg.color.goto(2,hsl(120));
lineSeg.color.goto(3,hsl(300));
lineSeg.color.goto(4,hsl(180));
lineSeg.color.goto(5,hsl(240));
lineSeg.color.goto(6,hsl(45));
// bil.lineShapes.add(0,10).triangle(120,true).sexy(10);
// bil.lineShapes.add(0,10).starOfDavid(300,true).setxy(30,60);
// const cross = bil.lineShapes.add(0,10).cross(0,true,50);
// cross.sexy(30,20);
// cross.width.animate(0,10,10,70);
// bil.lineShapes.add(0,10).tickRight(300,true).sexy(60,10);
// bil.lineShapes.add(0,10).tickLeft(300,true).setxy(0,0);
// bil.lineShapes.add(0,10).graphInc(300,true).sexy(5,30);
// bil.lineShapes.add(0,10).rectangle(300,true).sexy(5,30);
// bil.lineShapes.add(0,10).rightTriangle(300,true).sexy(25,10);
//--------------------------------------
// starOfDavid(lines);
////////////////////////
bil.draw();
// bil.resizeCanvas(800,400);
console.log("bil",bil);

//@ts-expect-error
const ui = new Ui(bil.bil );

