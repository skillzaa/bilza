import Bilza, { Ui, CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza", 70);
bil.background.color.set("#000000");
const g = cf.grid();
bil.insert.alwaysOn(g);
const counter = cf.frameCounter("#ff0000");
bil.insert.alwaysOn(counter);
getCircle(29, "yellow");
getCircle(25, "red");
getCircle(21, "green");
getCircle(17, "blue");
getCircle(13, "magenta");
getCircle(9, "cyan");
getCircle(6, "crimson");
function getCircle(radius = 25, color = "red") {
    const circle = cf.circle(radius, color);
    circle.filled.set(false);
    circle.lineWidth.set(25);
    circle.align(1, 1);
    circle.goto(0, 50, 50);
    circle.startAngle.set(0);
    circle.endAngle.set(0);
    circle.endAngle.animate(1, 15, 0, 360);
    bil.insert.add(circle, 0, 20);
}
const ui = new Ui(bil);
bil.draw();
