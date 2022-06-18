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
p.goto(0,80,80);
p.animate(2,10,80,10,80,10);
// p.resize(0,2,10,50,10,80);
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