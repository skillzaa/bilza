import IFilter from "./IFilter.js";

// import { FilterState } from "../../animationDesign/filterState.js";

export default class Increment implements IFilter{
    
protected  _ret_val :number | null;

protected  msDeltaStart :number;
protected  msDeltaEnd :number;

protected  startValue :number;
protected  endValue :number;

protected Xdiff :number;
protected  timeDiff :number;
//msDeltaStart wil be +1 than actual and msDeltaend will be -1 from actual
constructor(msDeltaStart :number,msDeltaEnd :number,startValue :number,endValue :number){

if (msDeltaStart < 0 || msDeltaEnd < 0 ){throw new Error("time can not be negative");}

if (msDeltaEnd <= msDeltaStart ){throw new Error("end Time can not be equal or smaller than start time");}    

if (startValue >= endValue ){throw new Error("start value can not be equal to or larger than end value in an increment operation");}    

//-21-06-2022 - I have commented this since at times we have very large comps which just need to be shown half on screen.
// if ( endValue < 0 ){throw new Error("end value can not be less than zero in an increment operation");}    

this.msDeltaStart = msDeltaStart ; 
this.msDeltaEnd = msDeltaEnd; 

//--in inc startValue is bigger than endValue but for Decrement op its opposite
this.startValue = startValue; 
this.endValue = endValue; 

this.timeDiff = Math.abs(this.msDeltaEnd - this.msDeltaStart) ;
this.Xdiff = Math.abs(this.startValue - this.endValue);

this._ret_val = null;
// this.filterState = FilterState.Waiting;
//--------------------------------
}

//--why return number | null??;
public value(msDelta :number,baseGotoValue :number=0):number | null{
//----safety    

const timeLapsed = Math.ceil(msDelta - this.msDeltaStart);
const timeLapPercent = (timeLapsed/(this.timeDiff)) * 100;
const distanceLapsed = (this.Xdiff/100) * timeLapPercent;
this._ret_val = baseGotoValue + parseFloat(distanceLapsed.toFixed(2));

return  this._ret_val;
}
public qualifyToRun(msDelta :number):boolean{
if (msDelta < this.msDeltaStart || msDelta > this.msDeltaEnd ) {
            return false;
        }else { 
            return true;
        }    
}


}