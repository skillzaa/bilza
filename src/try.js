import AniNumber from "./animationModule/aniNumber/aniNumber.js";
const no = new AniNumber(10);
no.set(50);
no.goto(2000, 20);
no.goto(2500, 25);
no.goto(2600, 26);
no.goto(2601, 27);
console.log("no", no);
