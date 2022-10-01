import IFilter from "./IFilter.js";
import Delay from "./delay.js";

export default class BaseFilter <T> implements IFilter<T> {
    
public  rTimeMsStart :number;
public  rTimeMsEnd :number;
public delay :Delay;
protected startValue :T;
protected  _animatedValue :T | null;
///--most often the beyondValue is the end value but if it is not the we have beyondValue seperately also
protected endValue :T;
protected beyondValue :T;

protected  readonly delaySec :number;

//-- It takes 4 values
constructor(
    rTimeMsStart :number, //--start time
    rTimeMsEnd :number, //--end time
    startValue :T,       //--base value
    endValue :T,       //--end value
    delaySec :number=0) // delay
{
this.delay = new Delay(delaySec);  
this.startValue = startValue;
this._animatedValue = null;
this.endValue = endValue;
//--beyond value is just to hold some value
this.beyondValue = endValue; //we can change it if we want
//--wrong    
// this._animatedValue = baseValue;
this.delaySec = delaySec;
//--no more counter since i am not counting frames any more
// this.delayInMSCounter = 0;

if (rTimeMsStart < 0 || rTimeMsEnd < 0 ){throw new Error("time can not be negative");}

if (rTimeMsEnd <= rTimeMsStart ){throw new Error("end Time can not be equal or smaller than start time");}    

this.rTimeMsStart = rTimeMsStart ; 
this.rTimeMsEnd = rTimeMsEnd; 
}
//--this is baseValue and not old value --we do not want to send oldValue since then we loose the ability to calculate every frame at its own
public update(rTimeMs :number):boolean{false  
    return  true;
}
protected isBeyond(rTimeMs :number):boolean{
    if (rTimeMs > this.rTimeMsEnd){
        this._animatedValue = this.beyondValue; //newValue 
        return true;        
    }else {
        return  false;
    }    
}
public  setBaseValue(bv :T):T{
this.startValue = bv;
return this.startValue;
}
public getBaseValue():T{
return this.startValue;
}
public  setBeyondValue(bv :T):T{
this.beyondValue = bv;
return this.startValue;
}
public getBeyondValue():T{
return this.beyondValue;
}
public  setEndValue(ev :T):T{
this.endValue = ev;
return this.endValue;
}
public getEndValue():T{
return this.endValue;
}

//--This impl will work for all if baseValue and animatedvalue r same then send any if not send _animatedValue
//--it must not send out null since the defaultValue of AniProp is for time when there is no filter. 
// --A filter must always atleast return its default value.
public animatedValue():T{
    if (this._animatedValue == null){
        return this.startValue; 
    }else {
        return this._animatedValue;
    }
}

getRandom(min:number,max:number):number{
return Math.floor(Math.random()*( max - min + 1) + min);    
}
}