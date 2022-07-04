import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";

export default class SetOnce extends BaseFilter<string> {
private    theValue:string;
private usedOnce:boolean;
constructor(startTimeSec :number, theValue :string){

super(startTimeSec,startTimeSec+3000);  
this.theValue = theValue;
this.usedOnce = false;
this._ret_val = null;
}

update(msDelta: number): FilterState {
;
if ((super.update(msDelta) == FilterState.Running) && (this.usedOnce == false)){
   this._ret_val = this.theValue;
   this.usedOnce = true;
}else {
    this._ret_val = null;
}

return this.filterState;
}


}
