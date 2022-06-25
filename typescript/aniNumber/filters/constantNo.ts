import { FilterState } from "../filterState.js";
import BaseFilter from "./baseFilter.js";

export default class ConstantNo extends BaseFilter {
    constantValue:number;
constructor(startTimeSec :number,endTimeSec :number, constantValue :number){
super(startTimeSec,endTimeSec);  
this.constantValue = constantValue;
this._ret_val = null;
}

update(msDelta: number): FilterState {
super.update(msDelta);
if (this.filterState == FilterState.Running){
    this._ret_val = this.constantValue;
}else {
    this._ret_val = null;
}

return this.filterState;
}


}
