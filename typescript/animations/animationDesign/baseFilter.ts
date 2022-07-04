import { FilterState } from "./filterState.js";
import IFilter from "./IFilter.js";

export default class BaseFilter <T> implements IFilter <T> {
//-- This is the only output from this class
protected _ret_val : T | null;  
protected filterState :FilterState
protected  startTime :number;
protected  endTime :number;

constructor(startTimeSec :number,endTimeSec :number){
    
if (startTimeSec < 0 || endTimeSec < 0 ){throw new Error("time can not be negative");}

if (endTimeSec <= startTimeSec ){throw new Error("end Time can not be equal or smaller than start time");}    


this.startTime = startTimeSec * 1000; 
this.endTime = endTimeSec * 1000; 
this._ret_val = null;
this.filterState = FilterState.Waiting;
}
 
/**
 * 4-july-2022 : Update is old setState . In this class the update just uses the msDelta to determine which state is it in. This is the basic functionality of Filter.
 * All the child classes will call the super.update(msDelta) to get filterState and then will do its thing 
 *  - Do not change this behaviour to adopt other similar but different things. let it do one great thing
 * Filter will always return null when not in range i.e not firing. However the aniNumber etc etc will decided what to do with that value.
 */

update(msDelta: number): FilterState {
if (msDelta < this.startTime ){
    this.filterState = FilterState.Waiting;

}else if(msDelta >= this.startTime && msDelta <= this.endTime ){
    this.filterState = FilterState.Running;

}else if (msDelta > this.endTime){
    this.filterState = FilterState.Exhausted;
}
return     this.filterState;
}

value(): T | null {
    return this._ret_val;
}
}