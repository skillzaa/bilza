import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.resizeCanvas(600,null);
// bil.insert.alwaysOn(cf.grid(10,10,));
bil.background.color.set(hsl(0,20,30));
//--------------------

const slim = cf.text("Simple Text")
slim.setxy(10,50);
slim.templ.slim(60)
slim.theme.color(60);
bil.insert.add(slim,0,30);

//--------------------
const ui = new Ui(bil);
bil.draw();

