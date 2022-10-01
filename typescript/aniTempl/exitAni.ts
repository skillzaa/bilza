
import {FontFamily} from "../bilza.js";
import Text from "../components/text/text.js";
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
this.comp.x.animate(
    this.comp.getEndTime(false) - 2,
this.comp.getEndTime(false),
this.comp.x.value(),
- this.comp.width.value() 
);
return this.comp;
}
rightOut(){
//---what ever the alignment it does not matter even if the align is right still - width takes care of that   
this.comp.x.animate(
    this.comp.getEndTime(false) - 1,
this.comp.getEndTime(false),
this.comp.x.value(),
100 + this.comp.width.value() 
);
return this.comp;
}

bottomOut(){
    this.comp.y.animate(
    this.comp.getEndTime(false) - 1,
    this.comp.getEndTime(false),
    this.comp.y.value(),
    100 + this.comp.height.value() 
    );
    return this.comp;    
}
topOut(){
    this.comp.y.animate(
    this.comp.getEndTime(false) - 1,
    this.comp.getEndTime(false),
    this.comp.y.value(),
    ( -1 * this.comp.height.value()) 
    );
    return this.comp;    
}
fadeOut(){
    this.comp.opacity.animate(
        this.comp.getEndTime(false) - 1,
    this.comp.getEndTime(false),100,0
    );
    return this.comp;    
}

}