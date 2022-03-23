import Bilza,{IDrawable}  from "../index.js";
import clip01 from "../clips/clip01.js";

let bilzaa = new Bilza("bilza",800,350,15000);
///////////////////////////////
// bilzaa.add.grid();
// console.log(clip01());
bilzaa.mergeClip(clip01());
// bilzaa.comps = clip01();
bilzaa.start();
