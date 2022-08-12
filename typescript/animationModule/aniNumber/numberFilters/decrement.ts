import BaseFilter from "./baseFilter.js.js";

export default class Decrement extends BaseFilter{

protected  startValue :number;
protected  endValue :number;

protected Xdiff :number;
protected  timeDiff :number;

constructor(rTimeMsStart :number,rTimeMsEnd :number,startValue :number,endValue :number){
super(rTimeMsStart,rTimeMsEnd);
if ( startValue  <= endValue  ){throw new Error("end value can not be equal to or larger than start value in an decrement operation");}    

//--it can be in decrement op but not in increment op.
if ( startValue < 0 ){throw new Error("start value can not be less than zero in decrement operation");}    

//------------------------------------
this.startValue = startValue; 
this.endValue = endValue; 
//------------------------------------
this.timeDiff = Math.abs(this.rTimeMsStart - this.rTimeMsEnd) ;
this.Xdiff = Math.abs( this.startValue - this.endValue );
//------------------------------------

}


public update(rTimeMs :number,baseGotoValue :number=0):boolean{
    
const timeLapsed = Math.ceil(rTimeMs - this.rTimeMsStart);
const timeLapPercent = (timeLapsed/(this.timeDiff)) * 100;
//--we have to flip the perc for decrement
const timeLapPercDecrement = Math.abs(100-timeLapPercent); 
const distanceLapsed =  (this.Xdiff/100) * timeLapPercDecrement;

// this._ret_val = this.startValue + distanceLapsed;
this._ret_val = Math.ceil(this.endValue + distanceLapsed);
return true;
}
public qualifyToRun(rTimeMs :number):boolean{
if (rTimeMs < this.rTimeMsStart || rTimeMs > this.rTimeMsEnd ) {
            return false;
        }else { 
            return true;
        }    
}
init(canvasWidthHeight: number): boolean {
this.startValue = this.percToPix(canvasWidthHeight,this.startValue);
this.endValue = this.percToPix(canvasWidthHeight,this.endValue);
return true;
}       

}