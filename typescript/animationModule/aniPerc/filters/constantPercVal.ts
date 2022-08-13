import BaseFilter from "../../filters/baseFilter.js";
  
export default class ConstantPercVal extends BaseFilter<number>  {
 
constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :number,delayInMS :number=0){
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);  
}

init(canvasWidthHeight: number): boolean {
this.heightWidth =  canvasWidthHeight;   
    // this.baseValue = this.percToPix(canvasWidthHeight,this.baseValue);
    return true;
} 

public animatedValue(): number {
console.log( "animatedValue of ConstantPercVal") ;   
    if (this.responsive == true){
        if (this.heightWidth == null) { throw new Error("heightWidth is null");}
        return  this.percToPix(this.baseValue);
    }else {
        return  this.baseValue;
    }
}
}
