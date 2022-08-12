import BaseNumberFilter from "./baseNumberFilter.js";
  
export default class ConstantVal extends BaseNumberFilter  {
 
constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :number,delayInMS :number=0){
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);  
}

init(canvasWidthHeight: number): boolean {
    this.baseValue = this.percToPix(canvasWidthHeight,this.baseValue);
    return true;
    }       
}
