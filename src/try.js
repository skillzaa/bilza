import Bilza from "./bilza.js";
const bil = new Bilza("bilza");
bil.background.color.set("red");
const comp = bil.add(0, 60).fillRect("red");
console.log("compDb", comp);
bil.draw();
