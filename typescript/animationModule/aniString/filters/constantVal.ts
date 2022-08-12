import BaseStringFilter from "./baseStringFilter.js";
  
export default class ConstantVal extends BaseStringFilter  {
 
constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :string,delayInMS :number=0){
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);  
}
public animatedValue(): string {
    return this.baseValue;
}
}
