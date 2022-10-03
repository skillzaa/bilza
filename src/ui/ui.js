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
    const counterDiv = document.getElementById("counterDiv");
    const sliderExists = document.getElementById("slider");
    if (sliderExists == null) {
        throw new Error("slider error");
    }
    const slider = sliderExists;
    slider.min = "0";
    slider.max = bil.duration.toString();
    slider.value = "0";
    setInterval(() => {
        if (bil.isRunning() == true) {
            const v = Math.ceil(bil.getLastMsDelta() / 1000).toString();
            slider.value = v;
            if (counterDiv !== null) {
                counterDiv.innerHTML = v;
            }
        }
    }, 500);
    slider.addEventListener("input", function (e) {
        bil.draw(e.target.value * 1000);
        if (counterDiv !== null) {
            counterDiv.innerHTML = (e.target.value).toString();
        }
    });
}
