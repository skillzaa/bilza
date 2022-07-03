import BaseFilterWOFilter from "./baseFilter.js";
import IFilter from "./IFilter.js";
import { FilterState } from "./filterState.js";

export default class BaseFilter <T> extends BaseFilterWOFilter  {
    
protected  _ret_val : T | null;

constructor(startTimeSec :number,endTimeSec :number){
super(startTimeSec,endTimeSec);

this._ret_val = null;

}

update(msDelta: number): FilterState {
this.setState(msDelta);
return this.filterState;
}
 

public value():T | null{
return  this._ret_val;
}

}