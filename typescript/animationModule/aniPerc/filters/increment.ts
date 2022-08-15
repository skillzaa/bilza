import BasePercFilter from "./basePercFilter.js";  
 
//NOTE : this.startValue = this.baseValue
export default class  Increment extends BasePercFilter{
    
protected  endValue :number;

// protected Xdiff :number;
protected  timeDiff :number;
//rTimeMsStart wil be +1 than actual and msDeltaend will be -1 from actual
constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :number,delayInMS :number=0,endValue :number){

super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);

this.endValue = endValue;

if (this.startValue >= this.endValue ){throw new Error("start value can not be equal to or larger than end value in an increment operation");}    


this.timeDiff = Math.abs(this.rTimeMsEnd - this.rTimeMsStart) ;
// this.Xdiff = Math.abs(this.baseValue - this.endValue);

}

//--why return number | null??;
public update(rTimeMs :number):boolean{
// if (rTimeMs >= 6000){debugger;}    
//--importanttay    
if(this.isBeyond(rTimeMs) == true){return false;}

const Xdiff = Math.abs(
    this.responsiveValue(this.startValue) - 
    this.responsiveValue(this.endValue) );
 
const timeLapsed = Math.ceil(rTimeMs - this.rTimeMsStart);
const timeLapPercent = (timeLapsed/(this.timeDiff)) * 100;
const distanceLapsed = ( Xdiff/100) * timeLapPercent;
this._animatedValue = this.responsiveValue(this.startValue) + parseFloat(distanceLapsed.toFixed(2));

return  true;
}
       
}