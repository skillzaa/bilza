import IFilter from "../design/IFilter.js";
import { FilterState } from "../design/filterState.js";

export default class Increment implements IFilter{
    
protected  _ret_val :number | null;
protected filterState :FilterState

protected  startTime :number;
protected  endTime :number;

protected  startValue :number;
protected  endValue :number;

protected Xdiff :number;
protected  timeDiff :number;

constructor(startTimeSec :number,endTimeSec :number,startValue :number,endValue :number){

if (endTimeSec <= startTimeSec ){throw new Error("end Time can not be equal or smaller than start time");
}    

this.startTime = startTimeSec * 1000; 
this.endTime = endTimeSec * 1000; 

//--in inc startValue is bigger than endValue but for Decrement op its opposite
this.startValue = startValue; 
this.endValue = endValue; 

this.timeDiff = Math.abs(this.endTime - this.startTime) ;
this.Xdiff = Math.abs(this.startValue - this.endValue);

this._ret_val = null;
this.filterState = FilterState.Waiting;
//--------------------------------
}

update(msDelta: number): FilterState {
this.setState(msDelta);

if (this.filterState == FilterState.Running){    
const timeLapsed = Math.ceil(msDelta - this.startTime);
const timeLapPercent = (timeLapsed/(this.timeDiff)) * 100;
this._ret_val = (this.Xdiff/100) * timeLapPercent;
}else {
    this._ret_val = null;
}
return     this.filterState;
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
return this._ret_val;
}

}