import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";

export default class Oscillate extends BaseFilter<number> {
private    startValue: number;
private    endValue: number;
private    speed: number;
private    addSub: boolean;

constructor(startTimeSec :number,endTimeSec :number,startValue :number=1, endValue :number=10,speed :number= 1){
super(startTimeSec,endTimeSec);  

this.startValue = startValue ;
this.endValue = endValue;
this.addSub = true;
this.speed = speed;
this._ret_val = null;
}

update(msDelta: number): FilterState {
super.update(msDelta);    

if (this.filterState == FilterState.Running){
    //--should happen just once
    if (this._ret_val == null){
        this._ret_val = this.startValue;
        return this.filterState;
    }
    //----Decide to add or subtract 
    if (this._ret_val < this.startValue ){
        this.addSub = true;
    }else if (this._ret_val > this.endValue){
        this.addSub = false;
    }
    //----Now add or subtract
            if (this.addSub == true){
                this._ret_val += this.speed; 
            }else {
                this._ret_val -= this.speed; 
            }
    }
// console.log("thos._ret_val" , this._ret_val)
return this.filterState;        
}

}
