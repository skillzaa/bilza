import IFilter from "./IFilter.js";
import Delay from "./delay.js";
/**
 * Filter Mission
 * ==============
 * During Before state : It returns NULL (impl in update)
 * During After state : return afterValue (impl in update).
 * 
 * During start state : Will return startValue unless _animatedValue == null.If and when _animatedValue !== null then _animatedValue is passed out (impl in filterValue).
 */
export default class BaseFilter <T> implements IFilter<T> {
    
public  readonly startTimeMs :number;
public  readonly endTimeMs :number;

public delay :Delay;
//--this is the start/default value
protected startValue :T;
//--This is the only value that can be null BUT if it is not then this is the first value that goes out--when the filter is running.
//--The main purpose of update is to change _animatedValue.
protected  _animatedValue :T | null;
///--most often the afterValue is the end value but if it is not the we have afterValue seperately also
protected afterValue :T;
protected endValue :T;

protected  readonly delaySec :number;

//-- It takes 3 values (start , end , after)
constructor(
    startTimeMs :number, //--start time
    endTimeMs :number, //--end time
    startValue :T,       //--base value
    endValue :T,       //--end value
    afterValue :T=endValue,       //--end value
    delaySec :number=0) // delay
{
///--delay
this.delay = new Delay(delaySec);  
this.delaySec = delaySec;

this.startValue = startValue;
this.endValue = endValue;
this.afterValue = afterValue;
this._animatedValue = null;
//////////////////////////////////////////////////////
if (startTimeMs < 0 || endTimeMs < 0 ){throw new Error("time can not be negative");}

if (endTimeMs <= startTimeMs ){throw new Error("end Time can not be equal or smaller than start time");}    

this.startTimeMs = startTimeMs ; 
this.endTimeMs = endTimeMs; 
}
//--calling this update is must at the end--this implements these rules for before and after
public update(rTimeMs :number):void{  
// --Option 1: If isUnBord 
if (this.isBefore(rTimeMs) == true){
    this._animatedValue = null;
    return;
}
//--Option 2: If isBoyond 
if (this.isAfter(rTimeMs) == true){
    this._animatedValue = this.afterValue;
    return;
}

return;
}
//-------------????????????????????????????????
protected isAfter(rTimeMs :number):boolean{
    if (rTimeMs > this.endTimeMs){
        return true;        
    }else {
        return  false;
    }    
}
protected isBefore(rTimeMs :number):boolean{
    if (rTimeMs < this.startTimeMs){
        return true;        
    }else {
        return  false;
    }    
}
//--This impl will work for all if baseValue and animatedvalue r same then send any if not send _animatedValue
//--it must not send out null since the defaultValue of AniProp is for time when there is no filter. 
// --A filter must always atleast return its default value.
public filterValue():T{
    if (this._animatedValue == null){
        return this.startValue; 
    }else {
        return this._animatedValue;
    }
}
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// public  setStartValue(sv :T):T{
// this.startValue = sv;
// return this.startValue;
// }
// public getStartValue():T{
// return this.startValue;
// }
// public  setBeyondValue(bv :T):T{
// this.beyondValue = bv;
// return this.startValue;
// }
// public getBeyondValue():T{
// return this.beyondValue;
// }
// public  setEndValue(ev :T):T{
// this.endValue = ev;
// return this.endValue;
// }
// public getEndValue():T{
// return this.endValue;
// }


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
getRandom(min:number,max:number):number{
return Math.floor(Math.random()*( max - min + 1) + min);    
}
}