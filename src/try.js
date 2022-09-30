import Bilza from "./facade/bilza.js";
const bil = new Bilza("bilza");
bil.background.color.set("red");
const comp = bil.add(0, 60).fillRect("red");
comp.color.set("green");
comp.alignRotate(2, 2);
comp.align(2, 2);
comp.y.value();
console.log("bil", bil);
