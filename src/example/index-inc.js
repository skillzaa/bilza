import Decrement from "../BaseComponent/animation/filters/decrement.js";
let inc = new Decrement(0, 2, 100, 0);
for (let i = 0; i <= 120; i++) {
    inc.update(i);
    console.log("msdelta", i, "value", inc.value());
}
