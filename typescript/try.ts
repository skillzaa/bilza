import Bilza,{hsl} from "./bilza.js";

const bil = new Bilza("bilza");
bil.background.color.set("green");
const comp = bil.add(0,60).fillRect(hsl(240,90,80));
comp.x.set(100);
comp.y.set(100);
comp.width.set(200);
comp.height.set(200);
// comp.color.set("red");

bil.draw();
console.log("bil",bil);
