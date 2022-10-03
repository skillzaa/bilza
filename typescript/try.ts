import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set("green");
const comp = bil.add(0,10).fillRect(hsl(120,90,80));
comp.x.set(100);
comp.y.set(100);
comp.width.set(200);
comp.height.set(300);

const comp02 = bil.add(10,20).fillRect(hsl(0));
comp02.x.set(300);
comp02.y.set(10);
comp02.width.set(200);
comp02.height.set(400);
// bil.init();
bil.start();
//@ts-expect-error
const ui = new Ui(bil.bil );

console.log("bil",bil);
