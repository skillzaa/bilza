import Bilza from "./facade/fascade.js";
const bil = new Bilza("bilza");
const comp = bil.add(0, 60).fillRect("red");
console.log("comp", comp);
