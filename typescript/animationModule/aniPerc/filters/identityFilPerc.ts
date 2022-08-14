import BasePercFilter from "./basePercFilter.js";  

export default class IdentityFilPerc extends BasePercFilter {
  
constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :number,delayInMS :number=0){
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);  
}

public animatedValue(): number {
// console.log( "animatedValue of ConstantPercVal") ;   
return this.responsiveValue(this.baseValue);
}
}
