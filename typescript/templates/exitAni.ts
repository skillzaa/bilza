
import {FontFamily} from "../bilza.js";
import Text from "../components/text.js";
//---dont use bilza i may remove that
import BaseComponent from "../BaseComponent/00BaseComponent.js";

/**
 * ExitAni works with endTime
 */
export default class ExitAniPresets {
private  comp:BaseComponent;    

constructor(comp :BaseComponent){
this.comp = comp;    
}
leftOut(){
//---what ever the alignment it does not matter even if the align is right still - width takes care of that   
this.comp.x.animate(
    this.comp.getEndTime(false) - 2,
this.comp.getEndTime(false),
this.comp.x.value(),
- this.comp.width.value() 
);
}
rightOut(){
//---what ever the alignment it does not matter even if the align is right still - width takes care of that   
this.comp.x.animate(
    this.comp.getEndTime(false) - 2,
this.comp.getEndTime(false),
this.comp.x.value(),
this.comp.width.value() + this.comp.canvasWidth() 
);
}

}