import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";
import starOfDavid from "./lineShapes/startOfDavid.js";
const bil = new Bilza("bilza");

bil.background.color.set(hsl(60,30,85));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
// grid.colorVerticalLines.set("red");

// const lines = bil.add(0,60).starOfDavid("red");
bil.lineShapes.add(0,10).triangle("yellow").sexy(10);
bil.lineShapes.add(0,10).starOfDavid("magenta").setxy(10,60);
//--------------------------------------
// starOfDavid(lines);
////////////////////////
bil.draw();
// bil.resizeCanvas(800,400);
console.log("bil",bil);

//@ts-expect-error
const ui = new Ui(bil.bil );

