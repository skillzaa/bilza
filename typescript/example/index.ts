import Bilza, { CompFactory as cf , PresetComps } from "../Bilza.js";

let bil = new Bilza("bilza",70);
// bil.soundTrack = ""
bil.background.color = "#407740";
let c = cf.frameCounter();
c.goto(0,90,0,c.xAlign.Right);
bil.insert.alwaysOn(c);

const jt = PresetComps.jumbotron(1,3,"Jumbotron" , "#008000")
bil.insert.add(jt,0,10);

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