import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
grid.colorVerticalLines.set("red");


const comp = bil.add(0,60).arrow(50,90,50,10,"red");
////////////////////////
// comp.x.animate(0,5,   0,                    comp.rightEdge() );
// comp.y.animate(6,10,  0,                    comp.bottomEdge() );
// comp.x.animate(11,15, comp.rightEdge() ,  0 );
// comp.y.animate(16,20, comp.bottomEdge() , 0);

////////////////////////
bil.draw();

//@ts-expect-error
const ui = new Ui(bil.bil );

