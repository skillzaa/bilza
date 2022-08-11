import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";

export default class Vibrate extends BaseFilter<number> {
private    offset:number;
private    seed:number;
private    delay:number;
private    delayCounter:number;
constructor(startTimeSec :number,endTimeSec :number,seed :number=1, offset :number=10,delay :number=0){
super(startTimeSec,endTimeSec);  
this.offset = offset;
this.seed = seed;
this.delay = delay;
this.delayCounter = 0;
this._ret_val = null;
}

update(msDelta: number): FilterState {
super.update(msDelta);
if (this.filterState == FilterState.Running){
    if (this.delayCounter >= this.delay){
        this.delayCounter = 0;
        if (Math.random() > 0.5){
            this._ret_val =    this.seed + this.offset; 
        }else {
            this._ret_val =    this.seed - this.offset;        
        }
    }else {
        this.delayCounter += 1;
    }
}else {
    this._ret_val = null;
}

return this.filterState;
}


}
