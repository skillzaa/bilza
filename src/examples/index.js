var _a, _b;
import Bilza, { CompFactory as cf } from "../Bilza.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
let grid = cf.grid();
bil.insert.alwaysOn(grid);
let counter = cf.frameCounter();
counter.goto(0, 0, 20);
bil.insert.alwaysOn(counter);
let p = cf.fillRect("red");
p.goto(0, 80, 80);
p.animate(2, 10, 80, 10, 80, 10);
bil.insert.append(p, 20);
bil.start();
(_a = document.getElementById("play")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    bil.start();
});
(_b = document.getElementById("stop")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    bil.stop();
});
