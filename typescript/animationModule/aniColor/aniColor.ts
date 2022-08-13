import AniProp from "../aniProp/aniProp.js";

// import Increment from "./numberFilters/increment.js";
import ConstantVal from "../aniString/filters/constantVal.js";

// import JumpBetween from "./aniFilters/jumpBetween.js";
// import cycleThrough from "./aniFilters/jumpBetween.js";


export default class AniColor extends AniProp<string>  {

constructor(initialValue :string=""){

super(initialValue);

}
///////////////////////////////////////////////////////////
public goto(rTimeMs :number,value :string):boolean{
//--first search if the frame already exists or not if it do then dont duplicate
//--NO DUBLICATE FRAME NUMBERS ALLOWED IN GOTOARRAY 
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        if (fil.rTimeMsStart == rTimeMs){
            fil.setBaseValue(value);
            return true; // goto frame edited and not added
        } 
    }
    //---The value is base value for filter
    const v = new ConstantVal(rTimeMs,rTimeMs + 1000,value,0);
    this.addFilter(v);
    return false;//// new goto frame ADDED 
}
random(rTimeMsStart :number,rTimeMsEnd :number,delay :number){

}
} 