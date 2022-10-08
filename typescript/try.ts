import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");

bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
// grid.colorVerticalLines.set("red");

const lines = bil.add(0,60).lines();

lines.add(10,10,90,90,"red");
////////////////////////
bil.draw();
// bil.resizeCanvas(800,400);
console.log("bil",bil);

//@ts-expect-error
const ui = new Ui(bil.bil );

