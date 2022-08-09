import IFilter from "./IFilter.js";

export default class BaseFilter implements IFilter{
    
protected  _ret_val :number | null;

protected  msDeltaStart :number;
protected  msDeltaEnd :number;
private delayInMS :number;
private delayInMSCounter :number;


constructor(msDeltaStart :number,msDeltaEnd :number,delayInMS :number=0){
this.delayInMS = delayInMS;
this.delayInMSCounter = 0;
if (msDeltaStart < 0 || msDeltaEnd < 0 ){throw new Error("time can not be negative");}

if (msDeltaEnd <= msDeltaStart ){throw new Error("end Time can not be equal or smaller than start time");}    

this.msDeltaStart = msDeltaStart ; 
this.msDeltaEnd = msDeltaEnd; 
this._ret_val = null;
}

//--why return number | null??;
public value(msDelta :number,baseGotoValue :number=0):number | null{

return  this._ret_val;
}
public qualifyToRun(msDelta :number):boolean{
if (msDelta < this.msDeltaStart || msDelta > this.msDeltaEnd ) {
            return false;
        }else { 
            return true;
        }    
}
protected xFramesSkipped(msDelta :number):boolean{
    // if (this.delayInMSCounter < this.skipXframes) {
    //         this.skipframesCounter += 1 ;
    //         return false;
    // }else {
    //     this.skipframesCounter = 0;
    //     return true;
    // }
    return true;
}

}