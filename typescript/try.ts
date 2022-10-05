import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,60,30));



const comp = bil.add(0,60).fillRect(hsl(60,70,50));
comp.x.set(100);
comp.y.set(100);
comp.width.set(100);
comp.height.set(100);

const comp2 = bil.add(0,60).rect(hsl(0,70,50));
comp2.x.set(400);
comp2.y.set(100);
comp2.width.set(100);
comp2.height.set(100);

comp2.lineWidth.set(12);

bil.draw();
// bil.draw();
//@ts-expect-error
const ui = new Ui(bil.bil );

console.log("bil",bil);
