import BaseBooleanFilter from "./baseBooleanFilter.js";
  
export default class ConstantVal extends BaseBooleanFilter  {
 
constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :boolean,delayInMS :number=0){
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);  
}

public animatedValue(): boolean {
    return this.baseValue;
}
       
}
