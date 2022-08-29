import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.grid());
//--------------------
const comp = cf.text("ABCDEFG",hsl(240));

comp.templ.h1();
comp.theme.color(300);

bil.insert.add(comp,0,15);
//--------------------
const ui = new Ui(bil);
bil.draw();
