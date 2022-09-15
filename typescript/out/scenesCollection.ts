import Bilza, {Ui,hsl,getRandom,Scene,Scenes} from "../bilza.js";

let bil = new Bilza("bilza", 70);
// bil.resizeCanvas(1000,500);
// bil.insert.alwaysOn(cf.grid());
bil.alwaysOn().grid();
bil.alwaysOn().frameCounter();
bil.background.color.set(hsl(0,5,30));

//=============================================

bil.add(0,9).text("Scenes Collection").templ.hdg().theme.color(0)
.entryAni.leftIn().exitAni.fadeOut();

const j = Scenes.jt(4,8,"We can stitch Scenes together",240);
bil.addScene(j);


const sj = Scenes.swingJt(9,15,"Welcome to Bilza.js",240);
bil.addScene(sj);

/////////////////-----------------//
const twosqHro = Scenes.twoSqHor(15,20,hsl(0),hsl(240));
bil.addScene(twosqHro);
const twosqHorTitle = bil.add(15,20).text("2 Squares Horizontal").templ.bltPt(1,50,10).opacity.set(75);
//////////////////////////----//
const twosqVer = Scenes.twoSqVer(21,25,hsl(0),hsl(240));
bil.addScene(twosqVer);
const twosqVerTitle = bil.add(21,25).text("2 Squares Vertical").templ.bltPt(1,50,10).opacity.set(75);
///////////////////////////////----//
const fsq = Scenes.fourSq(26,30);
bil.addScene(fsq);
const fsqTitle = bil.add(26,30).text("4 Squares").templ.bltPt(1,50,10).opacity.set(75);

///////////////////////////////----//
const sixsq = Scenes.sixSq(31,35);
bil.addScene(sixsq);
const sixsqTitle = bil.add(31,35).text("6 Squares").templ.bltPt(1,50,10).opacity.set(75);

///////////////////////////////----//

const eightsq = Scenes.eightSq(36,40);
bil.addScene(eightsq);
const eightsqTitle = bil.add(36,40).text("8 Squares").templ.bltPt(1,50,10).opacity.set(75);

//-------------------
const ui = new Ui(bil);
bil.draw();
// console.log(j);