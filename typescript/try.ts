import Bilza from "./bilza.js";

const bil = new Bilza("bilza");
bil.background.color.set("green");
const comp = bil.add(0,60).fillRect("blue");
comp.x.set(50);
comp.y.set(50);
comp.width.set(50);
comp.height.set(50);

console.log("compDb",comp);
bil.draw();
