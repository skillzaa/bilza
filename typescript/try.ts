import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");

bil.background.color.set(hsl(60,30,85));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
// grid.colorVerticalLines.set("red");

const lines = bil.add(0,60).lines();
//--------------------------------------
lines.setxy(0);
lines.width.set(20);
lines.height.set(35);
//--------------------------------
lines.seg(0,75,"black")
.add(100,75)
.add(50,0)
.add(0,75)
.save();
// lines.add(0,75, 100,75,"red"); 
// lines.add(0,75,50,0,"red"); 
// lines.add(50,0,100,75,"red"); 

lines.add(0,25,100,25,"red"); 
lines.add(0,25,50,100,"red"); 
lines.add(100,25,50,100,"red"); 
//----------------------------------------
lines.seg(0,0,"green")
    .add(0,0)
    .add(100,100)
    .add(0,100)
    .add(100,0)
.save();
//----------------------------------------
// lines.showBackground.set(true);
lines.colorBackground.set( hsl(0,25, 90) );
// lines.align(1,1);
lines.alignRotate(1,1);
// lines.border.set(3);
// lines.colorBorder.set("magenta");
lines.setPaddings(0);

lines.rotation.animate(0,20,0,360 * 5);
lines.x.animate(1,5,0,lines.rightEdge());
lines.y.animate(6,10,0,lines.bottomEdge());
lines.x.animate(11,15,lines.rightEdge(),0);
lines.y.animate(16,20,lines.bottomEdge(),0);
////////////////////////
bil.draw();
// bil.resizeCanvas(800,400);
console.log("bil",bil);

//@ts-expect-error
const ui = new Ui(bil.bil );

