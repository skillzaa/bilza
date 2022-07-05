import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";

export default class Toogle extends BaseFilter<Boolean> {


constructor(startTimeSec :number,endTimeSec :number,skipXFrames :number=0){
super(startTimeSec,endTimeSec,skipXFrames);  
}
//---update of super is used

value(): Boolean | null {
if (this.isRunning() == false){
    return null;
}else {
    //-- This is the toogle logic
    if (this.xFramesSkipped()== true){
        if (this._ret_val == false || this._ret_val == null ){
            return true;
        }else {
            return false;
        }
    }
}
//--final --req by TS
return null;
}

}
