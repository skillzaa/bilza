import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const comp = cf.text("ABCDEFG", hsl(240));
comp.templ.jumbotron();
comp.theme.color(240);
bil.insert.add(comp, 0, 15);
const ui = new Ui(bil);
bil.draw();
