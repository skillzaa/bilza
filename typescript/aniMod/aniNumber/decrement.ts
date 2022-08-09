import BaseFilter from "../baseFilter";

export default class Decrement extends BaseFilter{

protected  startValue :number;
protected  endValue :number;

protected Xdiff :number;
protected  timeDiff :number;

constructor(msDeltaStart :number,msDeltaEnd :number,startValue :number,endValue :number){
super(msDeltaStart,msDeltaEnd);

if ( startValue  <= endValue  ){throw new Error("end value can not be equal to or larger than start value in an decrement operation");}    

//--it can be in decrement op but not in increment op.
if ( startValue < 0 ){throw new Error("start value can not be less than zero in decrement operation");}    

//------------------------------------
this.startValue = startValue; 
this.endValue = endValue; 
//------------------------------------
this.timeDiff = Math.abs(this.msDeltaStart - this.msDeltaEnd) ;
this.Xdiff = Math.abs( this.startValue - this.endValue );
//------------------------------------

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