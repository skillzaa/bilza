import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

///////////////////////////////////////////////////
///////////////////////////////////////////////////
const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,90,20));
bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);
//----------------------------------------------//
const grid = bil.alwaysOn().grid();


const lineSeg = bil.lineShapes.add(0,60).home(60,true,10);
// lineSeg.setxy( 50, 50 );
lineSeg.setPaddings(1);
lineSeg.alignRotate(1,1);

lineSeg.border.set(1);
lineSeg.colorBorder.set("yellow");
// lineSeg.align(1,1);

// lineSeg.showBackground.set(true);
lineSeg.colorBackground.set(hsl(0));

lineSeg.color.goto(2, hsl(0) );
lineSeg.color.goto(3, hsl(90) );
lineSeg.color.goto(4, hsl(300) );
lineSeg.color.goto(5, hsl(180) );
lineSeg.color.goto(6, hsl(240) );
lineSeg.color.goto(7, hsl(45) );

// lineSeg.rotation.animate(1,20,0,360 * 8);

lineSeg.x.animate(1,5,   0,                    lineSeg.rightEdge() );
lineSeg.y.animate(6,10,  0,                    lineSeg.bottomEdge() );
lineSeg.x.animate(11,15, lineSeg.rightEdge() ,  0 );
lineSeg.y.animate(16,20, lineSeg.bottomEdge() , 0);


////////////////////////
bil.draw();
// bil.resizeCanvas(800,400);
console.log("bil",bil);

//@ts-expect-error
const ui = new Ui(bil.bil );

