import BaseFilter from "./baseFilter.js";
  
export default class ConstantVal <T> extends BaseFilter <T>  {

constructor(msDeltaStart :number,msDeltaEnd :number,baseValue :T,delayInMS :number=0){
super(msDeltaStart,msDeltaEnd,baseValue,delayInMS);  
}

//--over written
public animatedValue(msDelta: number): T {
    return this.baseValue;
}

}
