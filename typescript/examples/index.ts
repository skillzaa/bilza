import Bilza, { CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
bil.soundTrackUrl = "./mix.mp3";
//--create the component
let grid = cf.grid();
//--insert the component
bil.insert.alwaysOn(grid);

//--create the component
let counter = cf.frameCounter();
// console.log("version",counter.version);
//--The initial location set at frame 0
// counter.go
counter.goto(0,0,20);
//--insert the component
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

// let bullet01 = cf.text("Bullet point for the heading","#008000",);
// AniTempl.BinStop(bullet01,4,6,50,40);
// bil.insert.add(bullet01,0,20);

// let bullet02 = cf.text("Bullet point for the heading","#008000",);
// AniTempl.RinStop(bullet02,8,12,50,80);
// AniTempl.RinLout(bullet02,8,12,80);
// AniTempl.BinTout(bullet02,2,12,50);
// AniTempl.BinStop(bullet02,2,4,50,50);

// bil.insert.add(bullet02,0,20);
bil.drawInit();

////////////////////////////////////////////



document.getElementById("play")?.addEventListener("click",function(){
    bil.start();
    bil.soundTrack?.play();
});
document.getElementById("stop")?.addEventListener("click",function(){
    bil.stop();
    if (bil.soundTrack !== null){
        bil.soundTrack.pause();
        bil.soundTrack.currentTime = 0;
    }
});