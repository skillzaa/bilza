import BaseNumberFilter from "./baseNumberFilter.js";  
 
//NOTE : this.startValue = this.baseValue
export default class Increment extends BaseNumberFilter{
    
// protected  startValue :number;
protected  endValue :number;

// protected Xdiff :number;
protected  timeDiff :number;
//rTimeMsStart wil be +1 than actual and msDeltaend will be -1 from actual
constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :number,delayInMS :number=0,endValue :number){

super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);

this.endValue = endValue;

if (this.baseValue >= this.endValue ){throw new Error("start value can not be equal to or larger than end value in an increment operation");}    


this.timeDiff = Math.abs(this.rTimeMsEnd - this.rTimeMsStart) ;
// this.Xdiff = Math.abs(this.baseValue - this.endValue);

}

//--why return number | null??;
public update(rTimeMs :number):boolean{

const Xdiff = Math.abs(this.baseValue - this.endValue);

const timeLapsed = Math.ceil(rTimeMs - this.rTimeMsStart);
const timeLapPercent = (timeLapsed/(this.timeDiff)) * 100;
const distanceLapsed = ( Xdiff/100) * timeLapPercent;
this._animatedValue = this.baseValue + parseFloat(distanceLapsed.toFixed(2));

return  true;
}

init(canvasWidthHeight: number): boolean {
this.heightWidth = canvasWidthHeight;
    
this.baseValue = this.percToPix(this.baseValue);
this.endValue = this.percToPix(this.endValue);
return true;
}       
}