export default function controls(bil) {
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
}
