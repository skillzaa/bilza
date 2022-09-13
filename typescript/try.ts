import Bilza, {Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
// bil.resizeCanvas(1000,500);
bil.insert.alwaysOn(cf.grid());
bil.background.color.set(hsl(0,5,30));
//=============================================
//=============================================

const hdg = cf.text("Heading 1");
bil.insert.add(hdg,0,20);

hdg.templ.hdg(1,3,10)
    .theme.color(0)
    .entryAni.topIn()
    .exitAni.fadeOut();


const comp = cf.text("Trying Templates")
.templ.bltPt(1,35,5)
.theme.color(0);
bil.insert.add(comp,2,20);

comp.entryAni.leftIn();
comp.exitAni.fadeOut();


//-------------------
const ui = new Ui(bil);
bil.draw();
