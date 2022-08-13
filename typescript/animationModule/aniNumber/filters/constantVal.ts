import BaseNumberFilter from "./baseNumberFilter.js";
  
export default class ConstantVal extends BaseNumberFilter  {
 
constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :number,delayInMS :number=0){
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);  
}

init(canvasWidthHeight: number): boolean {
this.heightWidth =  canvasWidthHeight;   
    // this.baseValue = this.percToPix(canvasWidthHeight,this.baseValue);
    return true;
} 

public animatedValue(): number {
    if (this.responsive == true){
        if (this.heightWidth == null) { throw new Error("heightWidth is null");}
        return  this.percToPix(this.baseValue);
    }else {
        return  this.baseValue;
    }
}
}
