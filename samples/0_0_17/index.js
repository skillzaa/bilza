import Bilza, { CompFactory as cf } from "./bilza_0_0_17.js";
let bil = new Bilza("bilza", 70);
let grid = cf.grid();
bil.insert.alwaysOn(grid);
let c = cf.frameCounter();
c.goto(0, 90, 0, c.xAlign.Right);
bil.insert.alwaysOn(c);
let mt = cf.fillRect("red");
mt.animate(1, 10, 0, 100, 50, 50, mt.xAlign.Left, mt.xAlign.Right);
bil.insert.append(mt, 20);
bil.init();
bil.drawFrame(0);
const slider = document.getElementById("slider");
slider === null || slider === void 0 ? void 0 : slider.addEventListener("input", function (e) {
    bil.drawFrame(e.target.value * 1000);
});
const start = document.getElementById("start");
start === null || start === void 0 ? void 0 : start.addEventListener("click", (e) => {
    console.log("start");
    bil.start();
});
const stop = document.getElementById("stop");
stop === null || stop === void 0 ? void 0 : stop.addEventListener("click", (e) => {
    bil.stop();
    slider.value = 0;
    bil.init();
    bil.drawFrame(0);
});
setInterval(() => {
    if (bil.isRunning() == true) {
        slider.value = Math.ceil(bil.lastMeDelta() / 1000);
    }
}, 500);
