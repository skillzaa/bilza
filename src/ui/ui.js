export default class Ui {
    constructor(bil) {
        sliderFn(bil);
        const startExists = document.getElementById("start");
        if (startExists !== null) {
            this.start = startExists;
            this.start.addEventListener("click", (e) => {
                bil.start();
            });
        }
        else {
            throw new Error("start button not found");
        }
        const stopExists = document.getElementById("stop");
        if (stopExists !== null) {
            this.stop = stopExists;
            this.stop.addEventListener("click", (e) => {
                bil.stop();
                slider.value = 0;
                bil.draw(0);
            });
        }
        else {
            throw new Error("stop button not found");
        }
    }
}
function sliderFn(bil) {
    const sliderExists = document.getElementById("slider");
    if (sliderExists == null) {
        throw new Error("slider error");
    }
    const slider = sliderExists;
    slider.min = "0";
    slider.max = bil.len(false).toString();
    slider.value = "0";
    setInterval(() => {
        if (bil.isRunning() == true) {
            slider.value = Math.ceil(bil.lastMeDelta() / 1000);
        }
    }, 500);
    slider.addEventListener("input", function (e) {
        bil.drawFrame(e.target.value * 1000);
    });
}
