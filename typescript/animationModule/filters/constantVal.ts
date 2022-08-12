import BaseFilter from "./baseFilter.js";
  
export default class ConstantVal <T> extends BaseFilter <T>  {

constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :T,delayInMS :number=0){
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);  
}

//--over written
public animatedValue(rTimeMs: number): T {
    return this.baseValue;
}

}
