import Bilza, { XAlignment,YAlignment,CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza");
// bil.resizeCanvas(1000, 400);

let grid = cf.grid();
bil.insert.alwaysOn(grid);

let c = cf.frameCounter();
c.goto(0,90,0,c.xAlign.Right);
bil.insert.alwaysOn(c);

let mt = cf.fillRect("red");
// mt.goto(0,0,50);
mt.animate(1,10,0,100,50,50,mt.xAlign.Left,mt.xAlign.Right);

//---------------------------------------------
bil.insert.append(mt,20);
////////////////////////////////////////////
// bil.start();
bil.init();
let currentFrame = 0;
setInterval(function(){
bil.drawFrame(currentFrame);
currentFrame += 1000;
},1000);