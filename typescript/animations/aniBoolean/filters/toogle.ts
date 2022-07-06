import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";

export default class Toogle extends BaseFilter<Boolean> {


constructor(startTimeSec :number,endTimeSec :number,skipXFrames :number=0){
super(startTimeSec,endTimeSec,skipXFrames);  
}
//---update of super is used
// update(msDelta: number): FilterState {
//     // if (msDelta > 420){debugger;}
// console.log("toogle msDelta",msDelta);    
// super.update(msDelta);
// return FilterState.Running;
// }
value(): Boolean | null {
// if (this.isRunning() == false){return null;}
// if (this._ret_val == null){ this._ret_val = true;}
this._ret_val =  !this._ret_val;
//-- This is the toogle logic
// console.log("this.xFramesSkipped()",this.xFramesSkipped());
// if (this.xFramesSkipped()== true){
//     switch (this._ret_val) {
//         case null:
//         case false:
//         this._ret_val = true;    
//             break;
//         case true:
//         this._ret_val = false;               
//             break;
//     } 
// }
//--final --req by TS
console.log("toogle::  value",this._ret_val);
return this._ret_val;
}

}
