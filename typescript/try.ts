import Bilza from "./bilza.js";

const bil = new Bilza("bilza");
bil.background.color.set("red");
const comp = bil.add(0,60).fillRect("red");
comp.x.set(200);
comp.y.set(200);
comp.width.set(200);
comp.height.set(200);

console.log("compDb",comp);
bil.draw();
