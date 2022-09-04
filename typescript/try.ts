import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);

const grid = cf.grid(10,10,"grey");
bil.insert.alwaysOn(grid);

const fc = cf.frameCounter(hsl(0));
fc.align(1,1);
fc.goto(0,50,50);
fc.fontSize.set(80);
fc.colorBackground.set(hsl(60,75));
bil.insert.add(fc,0,20);

const comp = cf.circle(20,hsl(60));
comp.setPaddings(10);
comp.showBackground.set(true);
comp.border.set(3);
comp.colorBorder.set(hsl(0));
comp.colorBackground.set(hsl(240));

//===---Animation Settings
    comp.x.set(0);
    comp.y.set(0);
    comp.width.set(20);
//-- In circle the height does not matter
    // comp.height.set(30);
    comp.x.animate(1, 5, 0, 90);
    comp.y.animate(6, 10, 0, 90);
    comp.x.animate(11, 15, 90, 0);
    comp.y.animate(16, 20, 90, 0);
//---------------------------------

bil.insert.add(comp,0,25);
const ui = new Ui(bil);
bil.draw();