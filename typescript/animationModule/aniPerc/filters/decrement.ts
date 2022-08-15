import BasePercFilter from "./basePercFilter.js";  
 
//NOTE : this.startValue = this.baseValue
export default class  Decrement extends BasePercFilter{
protected  endValue :number;
// protected Xdiff :number;
protected  timeDiff :number;

constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :number,delayInMS :number=0,endValue :number){

    super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);    
    this.endValue = endValue;

if (this.startValue <= this.endValue ){throw new Error("end value can not be equal to or larger than start value in an decrement operation");}    

//--it can be in decrement op but not in increment op.
if ( this.startValue < 0 ){throw new Error("start value can not be less than zero in decrement operation");}    

this.timeDiff = Math.abs(this.rTimeMsStart - this.rTimeMsEnd) ;


//------------------------------------

}


public update(rTimeMs :number,baseGotoValue :number=0):boolean{
//--importanttay    
if(this.isBeyond(rTimeMs) == true){return false;}
    
// const Xdiff = Math.abs( this.baseValue - this.endValue );   
const Xdiff = Math.abs(
    this.responsiveValue(this.startValue) - 
    this.responsiveValue(this.endValue) );

const timeLapsed = Math.ceil(rTimeMs - this.rTimeMsStart);
const timeLapPercent = (timeLapsed/(this.timeDiff)) * 100;
//--we have to flip the perc for decrement
const timeLapPercDecrement = Math.abs(100-timeLapPercent); 
const distanceLapsed =  (Xdiff/100) * timeLapPercDecrement;

this._animatedValue = Math.ceil( this.responsiveValue(this.endValue) + distanceLapsed);
return true;
}
}