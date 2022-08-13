import IFilter from "./IFilter.js";

export default class BaseFilter <T> implements IFilter<T> {
    
public  rTimeMsStart :number;
public  rTimeMsEnd :number;
public baseValue :T;
public responsive :boolean;
protected heightWidth :number | null;

private    delayInMS :number;
private    delayInMSCounter :number;
protected  _animatedValue :T | null;
// protected data :T[];
constructor(
    rTimeMsStart :number,rTimeMsEnd :number,
    baseValue :T,
    delayInMS :number=0)
{
  
this.responsive = false;    
this.heightWidth = null; // this is canvasHeightWidth    

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
init(canvasWidthHeight: number): boolean {
this.heightWidth = canvasWidthHeight;    
    return true;
}
percToPix(perc :number) {
if (this.heightWidth == null) {throw new Error("heightWidth is null");
     }
    return ((this.heightWidth / 100) * perc);
}

}