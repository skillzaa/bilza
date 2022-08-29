import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.resizeCanvas(600,null);
// bil.insert.alwaysOn(cf.grid());
bil.background.color.set(hsl(0,5,30));
//--------------------
const comp = cf.text("ABCDEFG",hsl(240));

comp.templ.h1();
comp.theme.color(240);
bil.insert.add(comp,0,30);

const ftnt = cf.text("This is foot note and we can write what ever we want in it");
ftnt.templ.ftNoteL();
ftnt.theme.color(240);
bil.insert.add(ftnt,0,30);

const bltPt = cf.text("The is a Bullet Point of Presentation");
bltPt.templ.bltPt(40);
bltPt.theme.color(240);
bil.insert.add(bltPt,0,30);

const bltPt02 = cf.text("ddd ddd ==it can spill off the screen as well== ddd ddd");
bltPt02.templ.bltPt(60);
bltPt02.theme.color(240);
bil.insert.add(bltPt02,0,30);

const bltPt03 = cf.text("The Third and last point of this slide");
bltPt03.templ.bltPt(80);
bltPt03.theme.color(240);
bil.insert.add(bltPt03,0,30);
//--------------------
const ui = new Ui(bil);
bil.draw();
