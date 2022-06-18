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
// p.aniPreset.BinStop(2,4,50,10);
// p.aniPreset.BinTout(2,4,50);
// p.aniPreset.LinRout(2,4,50);
// p.aniPreset.RinLout(2,4,50); //--defective
// p.aniPreset.RinStop(2,4,10,50); //--align left not Mid
// p.aniPreset.TinBout(2,4,50); //--goto is not fixed
p.aniPreset.TinStop(2,4,50,90);


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