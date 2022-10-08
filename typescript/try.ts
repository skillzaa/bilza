import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
grid.colorVerticalLines.set("red");

// const comp = bil.add(0,60).fillRect(hsl(0));
const comp = bil.add(0,60).text("Demo Text",hsl(0));

comp.height.set(50);
// console.log(comp.measure)
const marker155 = bil.add(0,60).marker(30,10,"green");
const marker233 = bil.add(0,60).marker(10,10,"grey");
const marker234 = bil.add(0,60).marker(20,20,"grey");
const marker235 = bil.add(0,60).marker(30,30,"grey");
const marker236 = bil.add(0,60).marker(40,40,"yellow");
const marker237 = bil.add(0,60).marker(50,50,"yellow");
const marker238 = bil.add(0,60).marker(60,60,"yellow");

////////////////////////
bil.draw();
// bil.resizeCanvas(800,400);

//@ts-expect-error
const ui = new Ui(bil.bil );

