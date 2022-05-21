
import Range from "./range.js";


let rng = new Range(0,10,-500,500);
rng.update(0);
console.log("0ms",rng.value());
rng.update(10);
console.log("10ms",rng.value());
rng.update(500);
console.log("500ms",rng.value());
rng.update(1000);
console.log("1000ms",rng.value());
rng.update(2000);
console.log("2000ms",rng.value());
rng.update(2500);
console.log("2500ms",rng.value());
rng.update(5000);
console.log("5000ms",rng.value());
rng.update(7500);
console.log("7500ms",rng.value());
rng.update(10000);
console.log("10000ms",rng.value());
