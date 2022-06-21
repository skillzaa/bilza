import Bilza, { CompFactory as cf } from "../Bilza.js";
let bil = new Bilza("bilza", 70);
bil.background.color = "#407740";
let c = cf.frameCounter();
c.goto(0, 90, 0, c.xAlign.Right);
bil.insert.alwaysOn(c);
let caption = cf.text("Demo image slide");
caption.goto(0, 1, 99, caption.xAlign.Left, caption.yAlign.Bot);
caption.dynWidth.setValue(15);
bil.insert.add(caption, 0, 20);
let text01 = cf.text("Image 01");
text01.dynWidth.setValue(25);
text01.aniPreset.TinStop(1, 2, 50, 5);
bil.insert.add(text01, 0, 10);
let mt = cf.pic("../images/beans.jpg", 70, 70);
mt.aniPreset.BinStop(1, 4, 50, 20);
bil.insert.add(mt, 0, 10);
let text02 = cf.text("Image --- 02");
text02.dynWidth.setValue(25);
text02.aniPreset.TinStop(11, 12, 50, 5);
bil.insert.add(text02, 11, 10);
let mt2 = cf.pic("../images/house.jpg", 70, 70);
mt2.aniPreset.LinStop(11, 13, 50, 20);
bil.insert.add(mt2, 11, 10);
bil.init();
bil.drawFrame(0);
const slider = document.getElementById("slider");
slider === null || slider === void 0 ? void 0 : slider.addEventListener("input", function (e) {
    bil.drawFrame(e.target.value * 1000);
});
const start = document.getElementById("start");
start === null || start === void 0 ? void 0 : start.addEventListener("click", (e) => {
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
