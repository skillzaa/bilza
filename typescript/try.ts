import Bilza,{hsl} from "./bilza.js";
import Ui from "./ui/ui.js";

const bil = new Bilza("bilza");
bil.background.color.set(hsl(240,60,30));



const comp = bil.add(0,60).fillRect(hsl(60,70,50));
comp.x.set(100);
comp.y.set(100);
comp.width.set(200);
comp.height.set(300);

// comp.x.goto(2,400);
// comp.x.animate(1,5,100,500);
comp.x.oscillate(1,50,100,500,2,100);
comp.color.goto(2,"red");

bil.draw();
// bil.draw();
//@ts-expect-error
const ui = new Ui(bil.bil );

console.log("bil",bil);
