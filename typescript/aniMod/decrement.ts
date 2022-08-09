import IFilter from "./IFilter.js";

export default class Decrement implements IFilter{
    
protected  _ret_val :number | null;

protected  msDeltaStart :number;
protected  msDeltaEnd :number;

protected  startValue :number;
protected  endValue :number;

protected Xdiff :number;
protected  timeDiff :number;
//msDeltaStart wil be +1 than actual and msDeltaend will be -1 from actual--???? am not usre if thisis good design.
constructor(msDeltaStart :number,msDeltaEnd :number,startValue :number,endValue :number){

if (msDeltaStart < 0 || msDeltaEnd < 0 ){throw new Error("time can not be negative");}

if (msDeltaEnd <= msDeltaStart ){throw new Error("end Time can not be equal or smaller than start time");}    


if ( startValue  <= endValue  ){throw new Error("end value can not be equal to or larger than start value in an decrement operation");}    

//--it can be in decrement op but not in increment op.
if ( startValue < 0 ){throw new Error("start value can not be less than zero in decrement operation");}    

this.msDeltaStart = msDeltaStart ; 
this.msDeltaEnd = msDeltaEnd; 

//------------------------------------
this.startValue = startValue; 
this.endValue = endValue; 
//------------------------------------
this.timeDiff = Math.abs(this.msDeltaStart - this.msDeltaEnd) ;
this.Xdiff = Math.abs( this.startValue - this.endValue );
//------------------------------------

this._ret_val = null;
//--------------------------------
}


public value(msDelta :number,baseGotoValue :number=0):number | null{
    
const timeLapsed = Math.ceil(msDelta - this.msDeltaStart);
const timeLapPercent = (timeLapsed/(this.timeDiff)) * 100;
//--we have to flip the perc for decrement
const timeLapPercDecrement = Math.abs(100-timeLapPercent); 
const distanceLapsed =  (this.Xdiff/100) * timeLapPercDecrement;

// this._ret_val = this.startValue + distanceLapsed;
this._ret_val = Math.ceil(this.endValue + distanceLapsed);
return this._ret_val;
}
public qualifyToRun(msDelta :number):boolean{
if (msDelta < this.msDeltaStart || msDelta > this.msDeltaEnd ) {
            return false;
        }else { 
            return true;
        }    
}


}