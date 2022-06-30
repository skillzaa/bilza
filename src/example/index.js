import Bilza, { Ui, CompFactory as cf } from "../bilza.js";
import PlainText from "../components/plainText.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 350);
const g = cf.grid();
bil.insert.alwaysOn(g);
const counter = cf.frameCounter();
counter.goto(0, 90, 0);
bil.insert.alwaysOn(counter);
const plain = new PlainText("Plain Text");
plain.goto(0, 0, 50);
plain.x.animate(1, 10, 0, 90);
bil.insert.add(plain, 0, 15);
const ui = new Ui(bil);
setInterval(() => {
    bil.draw();
}, 500);
