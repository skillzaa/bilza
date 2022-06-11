var _a, _b;
import Bilza, { CompFactory as cf } from "../Bilza.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
bil.soundTrackUrl = "./mix.mp3";
let grid = cf.grid();
bil.insert.alwaysOn(grid);
let counter = cf.frameCounter();
counter.goto(0, 0, 20);
bil.insert.alwaysOn(counter);
let p = cf.pic("./scream.jpg", 20, 50);
p.aniPreset.TinStop(p, 0, 2, 50, 10);
bil.insert.append(p, 20);
bil.drawInit();
(_a = document.getElementById("play")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    bil.start();
    (_a = bil.soundTrack) === null || _a === void 0 ? void 0 : _a.play();
});
(_b = document.getElementById("stop")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    bil.stop();
    if (bil.soundTrack !== null) {
        bil.soundTrack.pause();
        bil.soundTrack.currentTime = 0;
    }
});
