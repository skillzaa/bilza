import Bilza, { CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
// bil.soundTrack = "./mix.mp3";

let grid = cf.grid();
bil.insert.alwaysOn(grid);

let counter = cf.frameCounter();
counter.goto(0,0,20);
bil.insert.alwaysOn(counter);

let p = cf.fillRect("red");
// p.goto(0,p.offScreenXOpt.XRight,50);
// p.animate(2,6,p.offScreenXOpt.XRight,p.offScreenXOpt.XLeft,50,50,p.xAlign.Left,p.xAlign.Right,p.yAlign.Top,p.yAlign.Top,0,-100);
// p.aniPreset.BinStop(0,3,50,10);
// p.aniPreset.BinTout(0,12,50);
// p.aniPreset.LinRout(0,6,50);
p.aniPreset.LinStop(0,4,90,50);

bil.insert.append(p,20);

// bil.init();
// bil.drawFrame(8000);
bil.start();
////////////////////////////////////////////
document.getElementById("play")?.addEventListener("click",function(){
    bil.start();
});
document.getElementById("stop")?.addEventListener("click",function(){
    bil.stop();
});