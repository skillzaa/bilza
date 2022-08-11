import IFilter from "../../../animationModule/filters/IFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";

export default class Decrement implements IFilter  <number>{
    
protected  _ret_val :number | null;
protected filterState :FilterState

protected  startTime :number;
protected  endTime :number;

protected  startValue :number;
protected  endValue :number;

protected Xdiff :number;
protected  timeDiff :number;

constructor(startTimeSec :number,endTimeSec :number,startValue :number,endValue :number){
if (startTimeSec < 0 || endTimeSec < 0 ){throw new Error("time can not be negative");}

if (endTimeSec <= startTimeSec ){throw new Error("end Time can not be equal or smaller than start time");}  
  
if ( startValue  <= endValue  ){throw new Error("end value can not be equal to or larger than start value in an decrement operation");}    
//--it can be
if ( startValue < 0 ){throw new Error("start value can not be less than zero in decrement operation");}    

this.startTime = startTimeSec * 1000; 
this.endTime = endTimeSec * 1000; 

//--in inc startValue is bigger than endValue but for Decrement op its opposite
this.startValue = startValue; 
this.endValue = endValue; 

this.timeDiff = Math.abs(this.startTime - this.endTime) ;

this.Xdiff = Math.abs( this.startValue - this.endValue );

this._ret_val = null;
this.filterState = FilterState.Waiting;
//--------------------------------
}

update(msDelta: number): FilterState {
this.setState(msDelta);

if (this.filterState == FilterState.Running){    
const timeLapsed = Math.ceil(msDelta - this.startTime);
const timeLapPercent = (timeLapsed/(this.timeDiff)) * 100;
//--we have to flip the perc for decrement
const timeLapPercDecrement = Math.abs(100-timeLapPercent); 
const distanceLapsed =  (this.Xdiff/100) * timeLapPercDecrement;

// this._ret_val = this.startValue + distanceLapsed;
this._ret_val = Math.ceil(this.endValue + distanceLapsed);
// console.log("msDelta : this._ret_val",msDelta, this._ret_val);    
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