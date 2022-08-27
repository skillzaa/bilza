import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
const fc = cf.frameCounter(hsl(0));
fc.align(0, 2);
fc.goto(0, 0, 100);
fc.fontSize.set(80);
fc.color.set(hsl(60));
fc.colorBackground.set(hsl(240, 100, 60));
bil.insert.alwaysOn(fc);
const comp = cf.line(20, 25, 80, 25, hsl());
comp.alignRotate(0);
comp.lineWidth.set(20);
comp.rotation.animate(0, 6, 0, 3 * 360);
bil.insert.add(comp, 0, 25);
const comp02 = cf.line(20, 50, 80, 50, hsl(120));
comp02.alignRotate(1);
comp02.lineWidth.set(20);
comp02.rotation.animate(7, 12, 0, 3 * 360);
bil.insert.add(comp02, 0, 25);
const comp03 = cf.line(20, 75, 80, 75, hsl(240));
comp03.alignRotate(2);
comp03.lineWidth.set(20);
comp03.rotation.animate(13, 20, 0, 3 * 360);
bil.insert.add(comp03, 0, 25);
const ui = new Ui(bil);
bil.draw();
