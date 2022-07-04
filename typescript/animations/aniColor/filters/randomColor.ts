import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";

export default class RandomColor extends BaseFilter <string> {
private    everyXFrame:number;
private    delayCounter:number;

constructor(startTimeSec :number,endTimeSec :number,everyXFrame :number=0){

super(startTimeSec,endTimeSec);  
this.everyXFrame = everyXFrame;
this.delayCounter = 0;
this._ret_val = null;
}

update(msDelta: number): FilterState {
super.update(msDelta);
if (this.filterState == FilterState.Running){
    if (this.delayCounter >= this.everyXFrame){
        this.delayCounter = 0;
       const hue = Math.floor(Math.random() * 360);
       const sat = Math.floor(Math.random() * 101);
       const light = Math.floor(Math.random() * 101);
        this._ret_val = `hsl(${hue},${sat}%,${light}%)`; 

    }else {
        this.delayCounter += 1;
    }
}else {
    this._ret_val = null;
}

return this.filterState;
}


}
