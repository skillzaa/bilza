import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
grid.colorVerticalLines.set("red");

// const comp = bil.add(0,60).fillRect(hsl(0));
const comp = bil.add(0,60).text("Demy Tgzxt",hsl(0));

comp.width.set(20);
comp.height.set(20);
// comp.fitToWidth.set(true);
comp.showBackground.set(true);
comp.setPaddings(0);

// comp.y.set(0);

comp.x.animate(0,5,0,comp.rightEdge() );

// console.log("bil",bil);
////////////////////////
bil.draw();
// bil.resizeCanvas(800,400);

//@ts-expect-error
const ui = new Ui(bil.bil );

