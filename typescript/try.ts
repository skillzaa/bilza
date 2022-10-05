import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,60,30));



const comp = bil.add(0,10).fillRect(hsl(120,90,80));
comp.x.set(100);
comp.y.set(100);
comp.width.set(200);
comp.height.set(300);

comp.y.goto(2,400);


bil.draw();
// bil.draw();
//@ts-expect-error
const ui = new Ui(bil.bil );

console.log("bil",bil);
