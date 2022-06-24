import { FilterState } from "../design/filterState.js";
import BaseFilter from "./baseFilter.js";

export default class JumpBetween extends BaseFilter {
private    pointOne:number;
private    pointTwo:number;
private    everyXFrame:number;
private    delayCounter:number;

constructor(startTimeSec :number,endTimeSec :number,pointOne :number=1, pointTwo :number=10,everyXFrame :number=0){
super(startTimeSec,endTimeSec);  

this.pointOne = pointOne;
this.pointTwo = pointTwo;
this.everyXFrame = everyXFrame;
this.delayCounter = 0;
this._ret_val = null;
}

update(msDelta: number): FilterState {
super.update(msDelta);
if (this.filterState == FilterState.Running){
    if (this.delayCounter >= this.everyXFrame){
        this.delayCounter = 0;
        if (this._ret_val !== this.pointOne){
            this._ret_val = this.pointOne;
        }else {
            this._ret_val = this.pointTwo;
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
