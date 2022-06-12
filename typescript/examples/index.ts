import Bilza, { CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
bil.soundTrack = "./mix.mp3";

let grid = cf.grid();
bil.insert.alwaysOn(grid);

let counter = cf.frameCounter();
counter.goto(0,0,20);
bil.insert.alwaysOn(counter);

//--create the component
// let tst = TextTempl.hdg("Heading","#ff0000",50,30,12);
// AniTempl.TinStop(tst,0,2,50,5);
//--insert the component
// bil.insert.append(tst, 20);

let p = cf.pic("./scream.jpg",20,50);
p.aniPreset.TinStop(p,0,2,50,10)
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