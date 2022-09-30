import Bilza from "./facade/bilza.js";


const bil = new Bilza("bilza");
bil.background.color.set("red");

const comp = bil.add(0,60).fillRect("red");

const engine = bil.draw();
console.log("engine",engine);
