import Bilza, { XAlignment, YAlignment,TextTempl, CompFactory as cf } from "../Bilza.js";
// import topInHdg from "../clips/topInHdg.js";
import Text from "../components/text/text.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);

let grid = cf.grid();
bil.insert.alwaysOn(grid);

let c = cf.frameCounter();
c.loc.goto(0,90,0);
bil.insert.alwaysOn(c);

//---Main Title
//---This should decide the length of the video, so lets make this the only appended component.
let mt = new Text("ABC","#000000",100,50,50);
mt.border =0;
mt.duration = 1000;
// mt.show
mt.loc.goto(0,10,10);
bil.insert.append(mt,mt.duration);

////////////////////////////////////////////
bil.init();
bil.start();
