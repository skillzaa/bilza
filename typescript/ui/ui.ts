import Engine from "../engine/engine.js";
/**
 * This class is responsible for any UI controls
 */
export default class Ui{

start :HTMLElement;
stop :HTMLElement;

constructor(bil :Engine){
sliderFn(bil);
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
            // bil.init();
            bil.draw(0);
            });
}else {
    throw new Error("stop button not found");
}


}    

//////////////////
}

function sliderFn(bil :Engine){
  //------------slider---------
const counterDiv = document.getElementById("counterDiv");
const sliderExists = document.getElementById("slider") as HTMLInputElement;
if ( sliderExists== null){ throw new Error("slider error");
}
const slider  = sliderExists;

slider.min = "0";
slider.max = bil.duration.toString() ;
slider.value = "0";

setInterval(()=>{
    if (bil.isRunning()==true){
        //@ts-expect-error 
        const v = Math.ceil(bil.getLastMsDelta()/1000).toString();
        slider.value = v; 
        if (counterDiv !== null){
        counterDiv.innerHTML = v;
        }
    }
},500);    
//..........
    slider.addEventListener("input",function(e){
    //@ts-expect-error
    bil.draw(e.target.value * 1000);
    if (counterDiv !== null){
        //@ts-expect-error
        counterDiv.innerHTML = (e.target.value).toString();
    }
    });
  
}