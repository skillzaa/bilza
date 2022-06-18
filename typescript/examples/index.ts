// import IncrementTimed from "../BaseComponent/animation/filters/IncrementTimed.js";

// let inc = new IncrementTimed(0,10,0,100);
// inc.update(5000);
// console.log("inc.update(5000)", inc.value());

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
p.goto(0,10,50);
p.animate(0,10,0,95,50,50);
// p.resize(0,2,10,50,10,80);
bil.insert.append(p,20);

bil.init();
bil.drawFrame(8000);

////////////////////////////////////////////

document.getElementById("play")?.addEventListener("click",function(){
    bil.start();
});
document.getElementById("stop")?.addEventListener("click",function(){
    bil.stop();
});