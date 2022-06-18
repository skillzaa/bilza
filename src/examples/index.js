import Increment from "../filters/increment.js";
let inc = new Increment(-2, 10, -500, 500);
inc.update(5000);
console.log("inc.update(5000)", inc.value());
