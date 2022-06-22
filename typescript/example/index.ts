import Bilza, { CompFactory as cf , PresetComps } from "../Bilza.js";
import Controls from "./controls.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(800,400);
const controls = new Controls(bil);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

let c = cf.frameCounter();
c.goto(0,90,0,c.xAlign.Right);
bil.insert.alwaysOn(c);


// const jt = PresetComps.topInHdg(0,1);
const content = "12345-12345";
const colorHax = "#008000";
const startFrame = 4;
const endFrame = 6;
const yUpto = 70;

const jt = cf.text(content,colorHax);
// const jt = cf.fillRect("blue");
jt.dynWidth.setValue(60);
jt.maxHeight = 30;    
jt.goto(0,50,50,jt.xAlign.Mid,jt.yAlign.Top);
    // jt.border.setValue(2);
jt.animate(
    startFrame,endFrame,    
    50,50, //x                  
    jt.offScreenYOpt.YTop,yUpto,
    jt.xAlign.Mid,jt.xAlign.Mid,
    jt.yAlign.Top,jt.yAlign.Top
    );
bil.insert.add(jt,0,10);


// bil.init();
// bil.drawFrame();
// bil.start();
//--------------------------------------