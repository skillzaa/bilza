import Bilza, {Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
// bil.resizeCanvas(1000,500);
bil.insert.alwaysOn(cf.grid());
bil.insert.alwaysOn(cf.frameCounter());
bil.background.color.set(hsl(0,5,30));

const comp = cf.text("fitToWidth");
    comp.setxy(0,20);
    comp.theme.color(0);
    comp.showBackground.set(true);
    // comp.fontSize.set(100);
    comp.width.set(10);
    comp.fitToWidth.set(true);
    comp.width.animate(1,1.5,10,100);
    // comp.fontSize.animate(1,10,10,100);
    // comp.fitToWidth.goto(4,true);
    bil.insert.add(comp,0,30);

//-------------------
const ui = new Ui(bil);
bil.draw();
