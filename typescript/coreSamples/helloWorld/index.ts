import Bilza, { XAlignment,YAlignment,CompFactory as cf } from "../../Bilza.js";

let bil = new Bilza("bilza",70);


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
    console.log("start");
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