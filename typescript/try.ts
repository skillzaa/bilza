import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";
import starOfDavid from "./lineShapes/starOfDavid.js";
const bil = new Bilza("bilza");

bil.background.color.set(hsl(60,30,85));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
// grid.colorVerticalLines.set("red");
const lines = bil.add(0,60).lines("red");

lines.sexy(10);

lines.seg(0,0,"red",true,4,0,0,[1,0]).add(100,0).add(0,100)
.add(0,0);

lines.width.animate(0,5,30,90);
lines.height.animate(6,10,30,90);

lines.color.goto(2,"blue");
// const lines = bil.add(0,60).starOfDavid("red");
// bil.lineShapes.add(0,10).triangle("yellow",10).sexy(10);
// bil.lineShapes.add(0,10).starOfDavid("magenta",12).setxy(10,60);
// bil.lineShapes.add(0,10).cross("blue",10).sexy(30);
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

