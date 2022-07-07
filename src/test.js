import Bilza, { Ui, CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza", 70);
bil.background.color.set("#330505");
const g = cf.grid();
bil.insert.alwaysOn(g);
const counter = cf.frameCounter("#ff0000");
counter.goto(0, 90, 0);
bil.insert.alwaysOn(counter);
getDancingLine();
getDancingLine();
getDancingLine();
getDancingLine();
getDancingLine();
const ui = new Ui(bil);
bil.draw();
function getDancingLine() {
    const plain = cf.line(50, 50, 100, 50);
    plain.color = "#96a4f2";
    plain.lineWidth.set(5);
    plain.x.random(0, 20, 0, 100, 10);
    plain.y.random(0, 20, 0, 100, 10);
    plain.x2.random(0, 20, 0, 100, 10);
    plain.y2.random(0, 20, 0, 100, 10);
    bil.insert.add(plain, 0, 20);
}
