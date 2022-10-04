import BaseNumberFilter from "./baseNumberFilter.js";  
 
//NOTE : this.startValue = this.baseValue
export default class Increment extends BaseNumberFilter{
    

// protected Xdiff :number;
// protected  timeDiff :number;
//rTimeMsStart wil be +1 than actual and msDeltaend will be -1 from actual
constructor(rTimeMsStart :number,rTimeMsEnd :number,startValue :number,endValue :number,delayInMS :number=0){

super(rTimeMsStart,rTimeMsEnd,startValue,endValue,delayInMS);
 

if (this.startValue >= this.endValue ){throw new Error("start value can not be equal to or larger than end value in an increment operation");}    


// this.timeDiff = Math.abs(this.endTimeMs - this.startTimeMs) ;
// this.Xdiff = Math.abs(this.baseValue - this.endValue);

}

//--why return number | null??;
public update(rTimeMs :number):void{
//--importanttay    
// if(this.isBeyond(rTimeMs) == true){return false;}

const Xdiff = Math.abs(this.startValue - this.endValue);

const timeLapsed = Math.ceil(rTimeMs - this.startTimeMs);
const timeLapPercent = (timeLapsed/(this.timeDiff())) * 100;
const distanceLapsed = ( Xdiff/100) * timeLapPercent;
this._animatedValue = this.startValue + parseFloat(distanceLapsed.toFixed(2));

return;
}


}