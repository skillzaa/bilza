import Bilza, { hsl } from "./bilza.js";
import Ui from "./ui/ui.js";
const bil = new Bilza("bilza");
bil.background.color.set(hsl(60, 30, 85));
bil.alwaysOn().canvasBorder(hsl(0, 70, 20), 0.5);
const grid = bil.alwaysOn().grid();
const lines = bil.add(0, 60).lines("red");
lines.sexy(10);
lines.seg(0, 0, "red", true, 4, 0, 0, [1, 0]).add(100, 0).add(0, 100)
    .add(0, 0);
lines.width.animate(0, 5, 30, 90);
lines.height.animate(6, 10, 30, 90);
lines.color.goto(2, "blue");
bil.draw();
console.log("bil", bil);
const ui = new Ui(bil.bil);
