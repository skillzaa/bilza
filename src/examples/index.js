var _a, _b;
import Bilza, { CompFactory as cf } from "../Bilza.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
bil.soundTrack = "./mix.mp3";
let grid = cf.grid();
bil.insert.alwaysOn(grid);
let counter = cf.frameCounter();
counter.goto(0, 0, 20);
bil.insert.alwaysOn(counter);
let p = cf.fillRect("red");
p.goto(0, 10, 50);
p.animate(2, 4, 10, 80, 50, 50);
bil.insert.append(p, 20);
bil.init();
bil.drawFrame(8000);
(_a = document.getElementById("play")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    bil.start();
});
(_b = document.getElementById("stop")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    bil.stop();
});
