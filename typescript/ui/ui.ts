import Bilza from "../bilza.js";
/**
 * This class is responsible for any UI controls
 */
export default class Ui{

start :HTMLElement;
stop :HTMLElement;

constructor(bil :Bilza){
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

function sliderFn(bil :Bilza){
  //------------slider---------
const sliderExists = document.getElementById("slider");
if ( sliderExists== null){ throw new Error("slider error");
}
const slider  = sliderExists;

//@ts-expect-error 
slider.min = "0";
//@ts-expect-error 
slider.max = bil.len(false).toString() ;
//@ts-expect-error 
slider.value = "0";

setInterval(()=>{
    if (bil.isRunning()==true){
        //@ts-expect-error 
        slider.value = Math.ceil(bil.getLastMsDelta()/1000);  
    }
},500);    
//..........
    slider.addEventListener("input",function(e){
    //@ts-expect-error
    bil.draw(e.target.value * 1000);
    });
  
}