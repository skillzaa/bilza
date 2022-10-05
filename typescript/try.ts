import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
// bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder();
const grid = bil.alwaysOn().grid();
grid.colorVerticalLines.set("red");

const circle = bil.add(0,200).circle(10,"red");
circle.lineWidth.set(10);
circle.y.set(50);
circle.filled.set(true);
circle.x.animate(0,100,0,90);
circle.strokeWidth.set(10);
circle.strokeColor.set("green");

const comp2 = bil.add(0,60).rect(hsl(0,70,50));
comp2.x.set(10);
comp2.y.set(10);
comp2.width.set(10);
comp2.height.set(10);

comp2.lineWidth.set(5);
comp2.x.animate(1,5,10,90);
comp2.y.animate(1,5,10,90);
// comp2.lineWidth.animate(0,2,1,60);

bil.draw();
// bil.draw();
//@ts-expect-error
const ui = new Ui(bil.bil );

console.log("bil",bil);
