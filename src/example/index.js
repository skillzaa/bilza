import Increment from "../BaseComponent/animation/filters/increment.js";
let inc = new Increment(0, 2, 0, 100);
for (let i = 0; i <= 120; i++) {
    inc.update(i);
    console.log("msdelta", i, "value", inc.value());
}
