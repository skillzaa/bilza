import Bilza, { Ui,CompFactory as cf,Experimental } from "./bilza.js";
// import Icon from "./components/icon/icon.js";

let bil = new Bilza("bilza",70);
// bil.resizeCanvas(1000,350);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,80,0);
bil.insert.alwaysOn(counter);

const icn = Experimental.Icon();
// icn.fontSize.set(10);
icn.xAlign = icn.XAlignOpt.Mid;
icn.yAlign = icn.YAlignOpt.Mid;

icn.goto(0,80,50);
// icn.fontSize.animate(2,10,100,500);
icn.rotation.animate(2,10,0,360 * 4);
bil.insert.add(icn,0,30);

const ui = new Ui(bil);
bil.draw();
