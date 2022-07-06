import Bilza, { Ui,CompFactory as cf } from "./bilza.js"; 
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
//-----------------------------------------
// const counter = cf.frameCounter("#ff0000");
// counter.goto(0,90,0);
// bil.insert.add(counter,0,20);
bil.set.loadDefaultBackground = false;
const txt = cf.rawText("Component Visible Prop","#ff0000");
txt.goto(0,50,50);
txt.xAlign = txt.XAlignOpt.Mid;
txt.yAlign = txt.YAlignOpt.Mid;
txt.fontSize.set(70);

txt.visible.toogle(0,2000,0);

bil.insert.add(txt,0,2000);

const ui = new Ui(bil);
bil.draw(5000); ///going back
// bil.start();

// @ts-expect-error
console.log("comps",bil.comps);
// bil.start();
