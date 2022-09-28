import Bilza, { Ui, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
bil.alwaysOn().grid(10, 10, hsl(0, 80, 20));
const rect = bil.add(0, 60).fillRect("green");
rect.width.set(20);
rect.x.animate(0, 5, 10, 100 - rect.compWidthNR());
const ui = new Ui(bil);
bil.draw();
