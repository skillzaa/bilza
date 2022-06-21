import Bilza, { CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza",70);

// bil.soundTrack = "../../"

let c = cf.frameCounter();
c.goto(0,100,0,c.xAlign.Right);
bil.insert.alwaysOn(c);

//------------------------------
let text01 = cf.text("Image 01");
// text01.duration = 20;
text01.aniPreset.TinStop(1,2,50,5);
bil.insert.add(text01,0,10);

let mt = cf.pic("./beans.jpg",70,70);
mt.aniPreset.BinStop(1,4,50,20);
bil.insert.add(mt,0,10);

//------------------------------
let text02 = cf.text("Image --- 02");
text02.aniPreset.TinStop(11,12,50,5);
bil.insert.add(text02,11,10);

let mt2 = cf.pic("./house.jpg",70,70);
mt2.aniPreset.LinStop(11,13,50,20);
bil.insert.add(mt2,11,10);
////////////////////////////////////////////
bil.init();
bil.drawFrame(0);
//--------------------------------
const slider  = document.getElementById("slider");
slider?.addEventListener("input",function(e){
//@ts-expect-error
bil.drawFrame(e.target.value * 1000);
});

const start  = document.getElementById("start");
start?.addEventListener("click",(e)=>{
    // console.log("start");
bil.start();
});

const stop  = document.getElementById("stop");
stop?.addEventListener("click",(e)=>{
bil.stop();
//@ts-expect-error
slider.value=0;
bil.init();
bil.drawFrame(0);
});

setInterval(()=>{
    if (bil.isRunning()==true){
    //@ts-expect-error        
    slider.value = Math.ceil(bil.lastMeDelta()/1000);  
    }
},500);