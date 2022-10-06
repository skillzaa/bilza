import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder( hsl(0,70,20) ,0.5);

const grid = bil.alwaysOn().grid();
grid.colorVerticalLines.set("red");

const circle = bil.add(0,25).circle(10,"red");
circle.filled.set(true);
circle.showBackground.set(true);
circle.colorBackground.set(hsl(120));
circle.setxy(0,0);

circle.goto(2,50,50);
////////////////////////
bil.draw();

//@ts-expect-error
const ui = new Ui(bil.bil );

