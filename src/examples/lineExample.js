import Bilza from "../Bilza.js";
let bil = new Bilza("bilza", 800, 300, 10000);
let g = bil.add.gridTempl.dashed();
bil.add.line(10, 0, 90, 0, "crimson", 3);
bil.add.line(10, 10, 90, 10, "crimson", 3);
bil.add.line(10, 20, 90, 20, "crimson", 3);
bil.add.line(10, 30, 90, 30, "crimson", 3);
bil.add.line(10, 40, 90, 40, "crimson", 3);
bil.add.line(10, 50, 90, 50, "green", 3);
bil.add.line(10, 60, 90, 60, "crimson", 3);
bil.add.line(10, 70, 90, 70, "crimson", 3);
bil.add.line(10, 80, 90, 80, "crimson", 3);
bil.add.line(10, 90, 90, 90, "crimson", 3);
bil.add.line(10, 100, 90, 100, "crimson", 3);
bil.draw();
setInterval(function () {
    bil.setCanvas(400, 150);
    bil.draw();
}, 3000);
