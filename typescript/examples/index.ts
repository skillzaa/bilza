import Bilza, { XAlignment, YAlignment,TextTempl, CompFactory as cf } from "../Bilza.js";
import firstClip from "./firstClip.js";
import topInHdg from "../clips/topInHdg.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);

let grid = cf.grid();
bil.insert.alwaysOn(grid);

let c = cf.frameCounter();
c.loc.goto(0,90,0);
bil.insert.alwaysOn(c);

// let txt01 = cf.text("txt01","#008000");
let txt01 = topInHdg ("The Title Of The Talk With Mr J.D Miller","#ff0000",5,10);
bil.insert.append(txt01,txt01.duration);
// bil.insert.alwaysOn(txt01);
//---------------create and insert clip
// let clip = firstClip();
// bil.insert.append(clip,clip.duration);
////////////////////////////////////////////
bil.init();
bil.start();
