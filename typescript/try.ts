import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
import MsgSwingRndCircles from "./scene/msgSwingRndCircles.js";

let bil = new Bilza("bilza",70);
// bil.set.loadSystemBackground = false;
// bil.background.color.set("green");
//-----------------------------------------


const txt01 = cf.text("Before Append");
txt01.color.set("red");
bil.insert.add(txt01,0,5);
//-----------------------------------------
const scene01 = new  MsgSwingRndCircles(bil.len(false),30);
// scene01.content.
bil.insert.insertScene(scene01);
//--------------------------------------------
const ui = new Ui(bil);
bil.draw();

// console.log(bil.comps);

