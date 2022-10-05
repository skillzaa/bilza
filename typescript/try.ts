import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
// bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder();
const grid = bil.alwaysOn().grid();


const comp = bil.add(0,60).fillRect(hsl(60,70,50));
comp.x.set(10);
comp.y.set(10);
comp.width.set(10);
comp.height.set(10);

comp.x.jumpBetween(2,20,10,40,1000);

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
