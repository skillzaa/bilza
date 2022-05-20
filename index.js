
import Decrement from "./src/animation/aniNumber/decrement.js";


let inc = new Decrement (0,10,100,0);
inc.update(1000); //msDelta is in ms
// expect(inc.value()).toBe(1);
console.log("10 sec", inc.value());