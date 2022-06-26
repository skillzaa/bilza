import IFilter from "../IFilter.js";
import { FilterState } from "../filterState.js";

export default class BaseFilter implements IFilter {
    
protected  _ret_val :number | null;
protected filterState :FilterState
//--not implemented yet
// public exhausted:boolean;
protected  startTime :number;
protected  endTime :number;

constructor(startTimeSec :number,endTimeSec :number){

if (startTimeSec < 0 || endTimeSec < 0 ){throw new Error("time can not be negative");}

if (endTimeSec <= startTimeSec ){throw new Error("end Time can not be equal or smaller than start time");}    


this.startTime = startTimeSec * 1000; 
this.endTime = endTimeSec * 1000; 


this._ret_val = null;
this.filterState = FilterState.Waiting;
// this.exhausted = false;
//--------------------------------
}

update(msDelta: number): FilterState {
this.setState(msDelta);
return this.filterState;
}
 

protected setState(msDelta: number): FilterState {
if (msDelta < this.startTime ){
    this.filterState = FilterState.Waiting;

}else if(msDelta >= this.startTime && msDelta <= this.endTime ){
    this.filterState = FilterState.Running;

}else if (msDelta > this.endTime){
    this.filterState = FilterState.Exhausted;
}
return     this.filterState;
}


public value():number | null{
return  this._ret_val;
}

}