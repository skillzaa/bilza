import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "../bilza.js";


let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,55,70));

const cb = cf.canvasBorder(hsl(240),25);
cb.color.goto(2,hsl(0));
cb.color.goto(4,hsl(120));
cb.color.goto(6,hsl(240));
cb.color.goto(8,hsl(60));
cb.color.goto(10,hsl(300));

bil.insert.add(cb,0,12);


//-------------------
const ui = new Ui(bil);
bil.draw();

