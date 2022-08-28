import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const comp = cf.text("Templates demo", hsl(240));
comp.templ.h1();
comp.theme.red();
bil.insert.add(comp, 0, 15);
const ui = new Ui(bil);
bil.draw();
