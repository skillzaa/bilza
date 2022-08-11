
export default class BaseFilter <T> {
    
public  msDeltaStart :number;
public  msDeltaEnd :number;
public baseValue :T;

private    delayInMS :number;
private    delayInMSCounter :number;
protected  _animatedValue :T | null;

constructor(msDeltaStart :number,msDeltaEnd :number,baseValue :T,delayInMS :number=0){
this._animatedValue = null;
this.delayInMS = delayInMS;
this.delayInMSCounter = 0;
this.baseValue = baseValue;    
//-----NO need to insert the goto(0) - since if not inserted we still have base value stored.

if (msDeltaStart < 0 || msDeltaEnd < 0 ){throw new Error("time can not be negative");}

if (msDeltaEnd <= msDeltaStart ){throw new Error("end Time can not be equal or smaller than start time");}    

this.msDeltaStart = msDeltaStart ; 
this.msDeltaEnd = msDeltaEnd; 
}
//--this is baseValue and not old value --we do not want to send oldValue since then we loose the ability to calculate every frame at its own
public update(msDelta :number):boolean{
    return  true;
}

public animatedValue(msDelta :number):T{
return this.baseValue;
        // let v  = this.applyFilter(); 
        //     if ( v != null){
        //         //--internally the filter will add this.value to the value--or what ever the filter does with the baseGotoValue is its own business just return a T
        //         return v;
        //     }else {
        //         return this.baseValue; 
        //     }
}

// protected xFramesSkipped(msDelta :number):boolean{
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