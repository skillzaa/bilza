import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";

export default class RandomNo extends BaseFilter <number> {
private    min:number;
private    max:number;
private    everyXFrame:number;
private    delayCounter:number;

constructor(startTimeSec :number,endTimeSec :number,min :number=1, max :number=10,everyXFrame :number=0){

super(startTimeSec,endTimeSec);  
this.min = min;
this.max = max;
this.everyXFrame = everyXFrame;
this.delayCounter = 0;
this._ret_val = null;
}

update(msDelta: number): FilterState {
super.update(msDelta);
if (this.filterState == FilterState.Running){
    if (this.delayCounter >= this.everyXFrame){
        this.delayCounter = 0;
       
        this._ret_val = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);

    }else {
        this.delayCounter += 1;
    }
}else {
    this._ret_val = null;
}

return this.filterState;
}


}
