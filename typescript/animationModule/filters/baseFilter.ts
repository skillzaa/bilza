import IFilter from "./IFilter.js";

export default class BaseFilter <T> implements IFilter<T> {
    
public  rTimeMsStart :number;
public  rTimeMsEnd :number;
public baseValue :T;

private    delayInMS :number;
private    delayInMSCounter :number;
protected  _animatedValue :T;
// protected data :T[];
constructor(
    rTimeMsStart :number,rTimeMsEnd :number,
    baseValue :T,
    delayInMS :number=0)
{
 
this.baseValue = baseValue;    
this._animatedValue = baseValue;
this.delayInMS = delayInMS;
this.delayInMSCounter = 0;
//-----NO need to insert the goto(0) - since if not inserted we still have base value stored.

if (rTimeMsStart < 0 || rTimeMsEnd < 0 ){throw new Error("time can not be negative");}

if (rTimeMsEnd <= rTimeMsStart ){throw new Error("end Time can not be equal or smaller than start time");}    

this.rTimeMsStart = rTimeMsStart ; 
this.rTimeMsEnd = rTimeMsEnd; 
}
//--this is baseValue and not old value --we do not want to send oldValue since then we loose the ability to calculate every frame at its own
public update(rTimeMs :number):boolean{
    return  true;
}
//--This impl will work for all if baseValue and animatedvalue r same then send any if not send _animatedValue
public animatedValue():T{
    if (this._animatedValue == this.baseValue){
        return this.baseValue; 
    }else {
        return this._animatedValue;

    }
        // let v  = this.applyFilter(); 
        //     if ( v != null){
        //         //--internally the filter will add this.value to the value--or what ever the filter does with the baseGotoValue is its own business just return a T
        //         return v;
        //     }else {
        //         return this.baseValue; 
        //     }
}

// protected xFramesSkipped(rTimeMs :number):boolean{
//     // if (this.delayInMSCounter < this.skipXframes) {
//     //         this.skipframesCounter += 1 ;
//     //         return false;
//     // }else {
//     //     this.skipframesCounter = 0;
//     //     return true;
//     // }
//     return true;
// }

}