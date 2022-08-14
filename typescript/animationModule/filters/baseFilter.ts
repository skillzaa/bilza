import IFilter from "./IFilter.js";

export default class BaseFilter <T> implements IFilter<T> {
    
public  rTimeMsStart :number;
public  rTimeMsEnd :number;

protected  _animatedValue :T | null;
protected baseValue :T;

private    readonly delayInMS :number;

//-- It takes 4 values
constructor(
    rTimeMsStart :number, //--start time
    rTimeMsEnd :number, //--end time
    baseValue :T,       //--base vlue
    delayInMS :number=0) // delay
{
  

this.baseValue = baseValue;    
this._animatedValue = baseValue;
this.delayInMS = delayInMS;
//--no more counter since i am not counting frames any more
// this.delayInMSCounter = 0;

if (rTimeMsStart < 0 || rTimeMsEnd < 0 ){throw new Error("time can not be negative");}

if (rTimeMsEnd <= rTimeMsStart ){throw new Error("end Time can not be equal or smaller than start time");}    

this.rTimeMsStart = rTimeMsStart ; 
this.rTimeMsEnd = rTimeMsEnd; 
}
//--this is baseValue and not old value --we do not want to send oldValue since then we loose the ability to calculate every frame at its own
public update(rTimeMs :number):boolean{
    return  true;
}
setBaseValue(bv :T):T{
this.baseValue = bv;
return this.baseValue;
}
//--This impl will work for all if baseValue and animatedvalue r same then send any if not send _animatedValue
//--it must not send out null since the defaultValue of AniProp is for time when there is no filter. a filter must always atleast return its default value.
public animatedValue():T{
    if (this._animatedValue == null){
        return this.baseValue; 
    }else {
        return this._animatedValue;
    }
}


}