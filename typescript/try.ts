import Bilza, {Ui,hsl,Scene,Scenes} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.resizeCanvas(1000,500);

bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);
bil.background.color.set(hsl(0,100,10));
//=============================================
// const raw = bil.add(0,60).text("02",hsl(120));
// raw.fontSize.set(55);
// raw.setxy(20,10);
//=============================================
const comp = bil.add(0,30).text("01",hsl(120));
comp.setxy(10,10);
comp.setPaddings(0);

// comp.fitToWidth.set(true);
// comp.width.set(10);

comp.fitToHeight.set(true);
comp.height.set(10);

//-------------------
const ui = new Ui(bil);
bil.draw();