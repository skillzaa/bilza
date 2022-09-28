import Bilza, {Ui,hsl,Scene,Scenes} from "./bilza.js";

let bil = new Bilza("bilza", 70);

bil.alwaysOn().grid(10,10,"grey");

const fc = bil.add(0,20).frameCounter(0);
fc.align(0,0);
fc.goto(0,50,50);
fc.fontSize.set(80);
fc.colorBackground.set(hsl(60,75));

const comp = bil.add(0,25).circle(20,hsl(60));
comp.setPaddings(0.25);
comp.showBackground.set(true);
comp.border.set(1);
comp.colorBorder.set(hsl(0));
comp.colorBackground.set(hsl(240));

//===---Animation Settings
    comp.x.set(0);
    comp.y.set(0);
    comp.width.set(20);
    comp.height.set(20);

    comp.x.animate(1, 5, 0, (100 - comp.compWidthPerc()) );
    comp.y.animate(6, 10, 0, 100 - comp.compHeightPerc());
    comp.x.animate(11, 15, 100 - comp.compWidthPerc(), 0);
    comp.y.animate(16, 20, 100 - comp.compHeightPerc(), 0);

//---------------------------------
const ui = new Ui(bil);
bil.draw();