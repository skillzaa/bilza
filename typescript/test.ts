import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
//-----------------------------------------
const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.add(counter,0,20);

const txt = cf.rawText("Component Visible Prop");
txt.goto(0,50,50);
txt.xAlign = txt.XAlignOpt.Mid;
txt.yAlign = txt.YAlignOpt.Mid;
txt.fontSize.set(70);
bil.insert.add(txt,0,20);

const ui = new Ui(bil);
bil.draw();

setInterval(function(){
txt.visible = !txt.visible;
},1000);