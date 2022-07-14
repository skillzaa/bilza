import Bilza, { Ui, CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.grid("green"));
const rect = cf.fillRect("red");
rect.goto(0, 10, 10);
rect.showBackground.set(true);
rect.colorBackground.set("green");
rect.border.set(10);
rect.paddingLeft.animate(0, 5, 0, 30);
rect.paddingRight.animate(6, 10, 0, 30);
rect.paddingTop.animate(11, 15, 0, 30);
rect.paddingBottom.animate(16, 20, 0, 30);
rect.colorBorder.set("blue");
bil.insert.add(rect, 0, 60);
const ui = new Ui(bil);
bil.draw();
