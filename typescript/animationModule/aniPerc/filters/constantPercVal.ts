// import BaseFilter from "../../filters/baseFilter.js";
import BasePercFilter from "./basePercFilter.js";  

export default class ConstantPercVal extends BasePercFilter {
  
constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :number,delayInMS :number=0){
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);  
}

public animatedValue(): number {
// console.log( "animatedValue of ConstantPercVal") ;   
    if (this.responsive == true){
        if (this.heightWidth == null) { throw new Error("heightWidth is null");}
        return  this.percToPix(this.baseValue);
    }else {
        return  this.baseValue;
    }
}
}
