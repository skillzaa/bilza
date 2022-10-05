import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
// bil.background.color.set(hsl(240,60,30));

bil.alwaysOn().canvasBorder();
bil.alwaysOn().grid();

const comp = bil.add(0,60).fillRect(hsl(60,70,50));
comp.x.set(100);
comp.y.set(100);
comp.width.set(100);
comp.height.set(100);

comp.x.jumpBetween(2,20,100,400,1000);

const comp2 = bil.add(0,60).rect(hsl(0,70,50));
comp2.x.set(400);
comp2.y.set(100);
comp2.width.set(100);
comp2.height.set(100);

comp2.lineWidth.set(5);
comp2.x.animate(1,4,400,10);
comp2.y.animate(1,4,100,300);
// comp2.lineWidth.animate(0,2,1,60);

bil.draw();
// bil.draw();
//@ts-expect-error
const ui = new Ui(bil.bil );

console.log("bil",bil);
