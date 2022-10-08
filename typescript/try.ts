import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
grid.colorVerticalLines.set("red");

const comp = bil.add(0,60).fillRect(hsl(0));
comp.showBackground.set(true);
comp.colorBackground.set( hsl(240,20,15));
comp.align(1,2);
comp.y.set(10);

comp.x.animate(0,5,0,comp.rightEdge());
comp.y.animate(6,10,10, comp.bottomEdge());
////////////////////////
bil.draw();

//@ts-expect-error
const ui = new Ui(bil.bil );

