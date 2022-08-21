import Bilza, { Ui,CompFactory as cf } from "../bilza.js";
import MsgSwingRndCircles from "../scene/msgSwingRndCircles.js";

let bil = new Bilza("bilza",70);
// bil.set.loadSystemBackground = false;
bil.background.color.set("hsl(240,100%,15%)");
//-----------------------------------------
const txt01 = cf.text("Before Append");
txt01.width.set(90);
txt01.color.set("hsl(60,100%,50%)");
bil.insert.add(txt01,0,5);
//-----------------------------------------
const scene01 = new  MsgSwingRndCircles(bil.len(false),30);
bil.insert.insertScene(scene01);
//--------------------------------------------
const ui = new Ui(bil);
bil.draw();
