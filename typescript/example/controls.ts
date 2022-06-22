import Bilza from "../Bilza.js";

export default class Controls{
// bil :Bilza;
slider :HTMLElement;
start :HTMLElement;
stop :HTMLElement;
constructor(bil :Bilza){
// this.bil = bil;
//------------slider---------
const sliderExists = document.getElementById("slider");
if ( sliderExists !== null){
this.slider  = sliderExists;
//bil.len(false)
this.slider.setAttribute('max',bil.len(false).toString());
this.slider.addEventListener("input",function(e){
    //@ts-expect-error
    bil.drawFrame(e.target.value * 1000);
    });
}else {
    throw new Error("slider not found");
}
//------------start---------
const startExists = document.getElementById("start");
    if ( startExists !== null){
        this.start  = startExists;
        this.start.addEventListener("click",(e)=>{
        bil.start();
    });
}else {
    throw new Error("start button not found");
}
//------------stop---------
const stopExists = document.getElementById("stop");
    if ( stopExists !== null){
        this.stop  = stopExists;
        this.stop.addEventListener("click",(e)=>{
            bil.stop();
            //@ts-expect-error
            slider.value=0;
            bil.init();
            bil.drawFrame(0);
            });
}else {
    throw new Error("stop button not found");
}
//---------interval
setInterval(()=>{
    if (bil.isRunning()==true){
    //@ts-expect-error        
    this.slider.value = Math.ceil(bil.lastMeDelta()/1000);  
    }
},500);    


}    

//////////////////
}