import Delay from "./delay.js";
/**
 * Filter Mission
 * ==============
 * During Before state : It returns NULL (impl in update)
 * During After state : return afterValue (impl in update).
 * 
 * During start state : Will return startValue unless _animatedValue == null.If and when _animatedValue !== null then _animatedValue is passed out (impl in filterValue).
 */
export default class BaseFilter <T> {
//--do not convert them into private since then i need methods to expose them which will have same names as getStartTime get EndTime    
public  readonly startTimeMs :number;
public  readonly endTimeMs :number;

protected delay :Delay;
//--this is the start/default value
private startValue :T;
//--This is the only value that can be null BUT if it is not then this is the first value that goes out--when the filter is running.
//--The main purpose of update is to change _animatedValue.
//--set it throught setAnimatedValue()
private  _animatedValue :T | null;
///--most often the afterValue is the end value but if it is not the we have afterValue seperately also
private afterValue :T | null;
private endValue :T;

// private  readonly delaySec :number;

//-- It takes 3 values (start , end , after)
constructor(
    startTimeMs :number, //--start time
    endTimeMs :number, //--end time
    startValue :T,       //--base value
    endValue :T,       //--end value
    delaySec :number=0) // delay
{
///--delay
this.delay = new Delay(delaySec);  
// this.delaySec = delaySec;

this.startValue = startValue;
this.endValue = endValue;
this.afterValue = null;
this._animatedValue = null;
//////////////////////////////////////////////////////
if (startTimeMs < 0 || endTimeMs < 0 ){throw new Error("time can not be negative");}

if (endTimeMs <= startTimeMs ){throw new Error("end Time can not be equal or smaller than start time");}    

this.startTimeMs = startTimeMs ; 
this.endTimeMs = endTimeMs; 
}
/**
 *  -- The BaseFilter will check for before and after state and take action accordingly.
 *  -- Incase of a before and after state it send back false which means the child class can stop running its update and return false also. 
 * -- every child mustrun super.update on TOP of his update method and if the super.update return false the child should also return false and quit.
 * --if (super.update(rTimeMs) == false ){ return false;}
 * -- This way the child is just suppose to worry about _animatedValue 
 */
public update(rTimeMs :number):boolean{  
// --Option 1: If isUnBord 
if (this.isBefore(rTimeMs) == true){
    this._animatedValue = null; //so send out startValue
    return false;
}
//--Option 2: If isBoyond 
if (this.isAfter(rTimeMs) == true){
    //--getAfterValue will send endValue since aftervalue is 
    // by default null. but if we setAfterValue() then the after state gives that value
    this._animatedValue = this.getAfterValue();
    return false;
}

return true;
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
timeDiff():number{
return Math.abs(this.startTimeMs - this.endTimeMs);
}
getStartValue():T{
return this.startValue;
}
getEndValue():T{
return this.endValue;
}

//--A neat way to set animated value
//--Remeber this can be null
setAnimatedValue(val :T | null):T | null{
this._animatedValue = val;
return this._animatedValue;
}
getAnimatedValue():T | null{
return this._animatedValue;
}

//////////////////////////
//--after is added as a feature
//--By default after value is null so when ever the filter is in after state the end value is sent out. but if we want we can change it .
//getAfterValue shd be called by filterValue for internal use
private getAfterValue():T{
    if (this.afterValue !== null){
        return this.afterValue;
    }else {
        return this.endValue;
    }
}
//--for users
public setAfterValue(val :T):T{
    this.afterValue = val;
    return this.afterValue;
}
    

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////


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